pipeline {
  agent any
  parameters {
  string defaultValue: 'myrepo/pleroma:latest', name: 'tag'
	}
  stages {
    stage('Docker Build') {
      steps withEnv(['DOCKER_BUILDKIT=0']){
        podman build . -t $tag
      }
    }
    stage('Push Docker Image'){
        steps{
            podman push $tag
        }
    }
    stage('Deploy with Helm') {
      steps {
            helm upgrade --install helm/pleroma/ -f helm/pleroma/values.yaml
        }
      }
    }
  }