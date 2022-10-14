pipeline {
  agent any
  parameters {
  string defaultValue: 'myrepo/pleroma', name: 'image_name'
  string defaultValue: 'latest', name: 'tag'
	}
  stages {
    stage('Docker Build') {
      steps {
        sh 'docker build . -t "$image_name":"$tag"'
      }
    }
    stage('Push Docker Image'){
        steps{
            sh 'docker push "$image_name":"$tag"'
        }
    }
    stage('Deploy with Helm') {
      steps {
           sh 'helm upgrade --install helm/pleroma/ -f helm/pleroma/values.yaml'
        }
      }
    }
  }
