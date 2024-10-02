pipeline {
agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: docker
    image: docker
    command:
    - sleep
    args:
    - infinity
    volumeMounts:
      - name: jenkins-docker-cfg
        mountPath: /dockercreds
  - name: ubuntu
    image: ubuntu:22.04
    command:
    - sleep
    args:
    - infinity
  volumes:
    - name: jenkins-docker-cfg
      projected:
        sources:
          - secret:
              name: docker-credentials
              items:
                - key: .dockerconfigjson
                  path: config.json
'''
        }
}
  parameters {
  string defaultValue: 'myrepo/pleroma', name: 'image_name'
  string defaultValue: 'latest', name: 'tag'
  string defaultValue: 'social.mysite.com', name: 'instance_name'
  string defaultValue: 'my@email.com', name: 'admin_email'
  string defaultValue: 'password', name: 'db_pass'
  string defaultValue: 'pleroma', name: 'namespace'
	}
  stages {
    stage('Gather Files'){
      steps{
      container('ubuntu'){
      sh 'apt update'
      sh 'apt install -y curl unzip git elixir erlang-dev erlang-nox build-essential cmake libssl-dev libmagic-dev automake autoconf libncurses5-dev'
      sh 'curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/develop/download?job=build-production -o soapbox.zip'
      sh 'unzip -o soapbox.zip'
      sh "sed -i -- 's/INSTANCE_NAME/$instance_name/g' values.yaml prod.secret.exs"
      sh "sed -i -- 's/ADMIN_EMAIL/$admin_email/g' values.yaml prod.secret.exs"
      sh "sed -i -- 's#IMAGE_NAME#$image_name#g' values.yaml"
      sh "sed -i -- 's/TAG/$tag/g' values.yaml"
      sh "sed -i -- 's/DBPASSWORD/$db_pass/g' values.yaml Dockerfile prod.secret.exs"
      }
      }
    }
    stage('Clone Rebased')
    {
      steps{
        container('ubuntu'){
          
          sh '''
          git clone https://gitlab.com/soapbox-pub/rebased
          '''
        }
      }
    }
    stage('Mix Deps'){
        steps{
        container('ubuntu'){
          withEnv(['MIX_ENV=prod','OAUTH_CONSUMER_STRATEGIES=twitter facebook google']){
          sh '''
          mix local.hex --force
          mix local.rebar --force
          cd rebased
          mix deps.get --only prod
          '''
          }
        }
        }
        }
    stage('Mix Release')
    {
      steps{
        container('ubuntu'){
          withEnv(['MIX_ENV=prod','OAUTH_CONSUMER_STRATEGIES=twitter facebook google','DEBIAN_FRONTEND=noninteractive']){
          sh '''
          cd rebased
          mkdir release
          mix release --path release
          '''
          }
        }
      }
    }
    stage('Docker Build') {
      steps {
        container('docker'){
        sh 'docker buildx create --name buildkit --driver=kubernetes --driver-opt=namespace=buildkit,rootless=true --use'
        sh "docker buildx build --platform linux/amd64 --push --progress plain -t $image_name ."
      }
      }
    }
//    stage('Deploy with Helm') {
//      steps {
//           sh 'PATH="/usr/local/bin:${PATH}"'
//           sh '/usr/local/bin/helm upgrade --install pleroma helm/pleroma/ -f values.yaml --namespace $namespace'
//        }
//      }
    }
  }
