# Pleroma instance configuration

# NOTE: This file should not be committed to a repo or otherwise made public
# without removing sensitive information.

import Config

config :pleroma, Pleroma.Web.Endpoint,
   url: [host: "INSTANCE_NAME", scheme: "https", port: 443],
   http: [ip: {0, 0, 0, 0}, port: 4000],
   secret_key_base: "SECRETKEYBASE",
   live_view: [signing_salt: "SIGNSALT"],
   signing_salt: "SIGNSALT"

config :pleroma, :instance,
  name: "INSTANCE_NAME",
  email: "ADMIN_EMAIL",
  notify_email: "ADMIN_EMAIL",
  limit: 5000,
  registrations_open: true

config :pleroma, :media_proxy,
  enabled: false,
  redirect_on_failure: true

config :pleroma, Pleroma.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "pleroma",
  password: "DBPASSWORD",
  database: "pleroma",
  hostname: System.get_env("PLEROMA_POSTGRESQL_SERVICE_HOST")

# Configure web push notifications
config :web_push_encryption, :vapid_details,
  subject: "mailto: ADMIN_EMAIL",
  public_key: "PUBLICKEY",
  private_key: "PRIVATEKEY"

config :pleroma, :database, rum_enabled: false
config :pleroma, :instance, static_dir: "/var/lib/pleroma/static"
config :pleroma, Pleroma.Uploaders.Local, uploads: "/var/lib/pleroma/uploads"

config :joken, default_signer: "DEFAULTSIGNER"

config :pleroma, configurable_from_database: true
