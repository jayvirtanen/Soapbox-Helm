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
    image: ubuntu
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
      container('ubuntu'){
      steps{
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
    stage('Docker Build') {
      container('docker'){
      steps {
        withEnv(['DOCKER_BUILDKIT=0']){
        sh 'echo $DOCKER_BUILDKIT'
        sh 'echo "$image_name":"$tag"'
        sh 'docker build . -t "$image_name":"$tag"'
        }
      }
      }
    }
    stage('Push Docker Image'){
      container('docker'){
        steps{
            sh 'docker push "$image_name":"$tag"'
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
