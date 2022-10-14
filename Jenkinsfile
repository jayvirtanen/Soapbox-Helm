pipeline {
  agent any
  parameters {
  string defaultValue: 'myrepo/pleroma', name: 'image_name'
  string defaultValue: 'latest', name: 'tag'
  string defaultValue: 'social.mysite.net', name: 'instance_name'
  string defaultValue: 'my@email.com', name: 'admin_email'
  string defaultValue: '11111111111111111111111', name: 'DB_PASS'
  string defaultValue: 'default', name: 'namespace'
	}
  stages {
    stage('Gather Files'){
      steps{
      sh 'curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/develop/download?job=build-production -o soapbox.zip'
      sh 'unzip -o soapbox.zip'
      sh "sed -i -- 's/INSTANCE_NAME/$instance_name/g' values.yaml prod.secret.exs"
      sh "sed -i -- 's/ADMIN_EMAIL/$admin_email/g' values.yaml prod.secret.exs"
      sh 'cat values.yaml'
      sh 'cat prod.secret.exs'
      }
    }
    stage('Docker Build') {
      steps {
        withEnv(['DOCKER_BUILDKIT=0']){
        sh 'echo $DOCKER_BUILDKIT'
        sh 'echo "$image_name":"$tag"'
        sh 'docker build . -t "$image_name":"$tag"'
        }
      }
    }
    stage('Push Docker Image'){
        steps{
            sh 'docker push "$image_name":"$tag"'
        }
    }
    stage('Deploy with Helm') {
      steps {
           sh 'PATH="/usr/local/bin:${PATH}"'
           sh 'kubectl get ns'
           sh '/usr/local/bin/helm upgrade --install pleroma helm/pleroma/ -f values.yaml --namespace $namespace'
        }
      }
    }
  }
