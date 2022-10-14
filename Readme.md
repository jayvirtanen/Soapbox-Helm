Install your Soapbox instance on kubernetes!

1. Edit the prod.secret.exs and values.yaml file (in the helm chart directory) with your instance details
2. Run the Jenkins job to build your instance and deploy it using helm

Requirements:

1. Docker and Helm configured on your build agent with access to the k8s cluster and the image on your image registry of choice.
2. A TLS secret in your k8s cluster named instance.name-tls (for example social.mysite.com-tls)

This project uses the latest version of the Rebased backend and Soapbox Frontend:
https://gitlab.com/soapbox-pub/rebased
https://gitlab.com/soapbox-pub/soapbox

To Do:
Generate salt, keys, and tokens during pipeline \n
Use secrets for DB credentials
