Install your Soapbox instance on kubernetes!

1. Run the Jenkins job to build your instance and deploy it using helm

At the moment you should generate your own salts and keys for the prod.secret.exs. Other instance details are populated via Jenkins parameters when kicking off the build. 

Requirements:

1. Docker and Helm configured on your build agent with access to the k8s cluster and the image on your image registry of choice.
2. A TLS secret in your k8s cluster named instance.name-tls (for example social.mysite.com-tls)

This project uses the latest version of the Rebased backend and Soapbox Frontend:
https://gitlab.com/soapbox-pub/rebased
https://gitlab.com/soapbox-pub/soapbox

To Do:

Generate salt, keys, and tokens during pipeline

Use secrets for DB credentials
