Install your Soapbox instance on kubernetes!

1. Edit the prod.secret.exs and values.yaml file (in the helm chart directory) with your instance details
2. Run the Jenkins job to build your instance and deploy it using helm

Requirements:

1. Docker and Helm configured on your build agent with access to the k8s cluster and the image on your image registry of choice.