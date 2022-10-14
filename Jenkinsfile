pipeline {
  agent any
  parameters {
  string defaultValue: 'myrepo/pleroma', name: 'image_name'
  string defaultValue: 'latest', name: 'tag'
	}
  stages {
    stage('Docker Build') {
      steps withEnv(['DOCKER_BUILDKIT=0']){
        podman build . -t "$image_name":"$tag"
      }
    }
    stage('Push Docker Image'){
        steps{
            podman push "$image_name":"$tag"
        }
    }
    stage('Deploy with Helm') {
      steps {
            helm upgrade --install helm/pleroma/ -f helm/pleroma/values.yaml
        }
      }
    }
  }
