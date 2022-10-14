# Pleroma instance configuration

# NOTE: This file should not be committed to a repo or otherwise made public
# without removing sensitive information.

import Config

config :pleroma, Pleroma.Web.Endpoint,
   url: [host: "INSTANCE URL", scheme: "https", port: 443],
   http: [ip: {0, 0, 0, 0}, port: 4000],
   secret_key_base: "jrqlt38x80Wt596CEi+ggwRBvgeoueQGWukrAWPG5MUZzigNS8uQgQhdclj3f36Z",
   live_view: [signing_salt: "7sgvCLIn"],
   signing_salt: "JUssJFa0"

config :pleroma, :instance,
  name: "INSTANCE NAME",
  email: "ADMIN EMAIL",
  notify_email: "ADMIN EMAIL",
  limit: 5000,
  registrations_open: true

config :pleroma, :media_proxy,
  enabled: false,
  redirect_on_failure: true

config :pleroma, Pleroma.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "pleroma",
  password: System.get_env("DB_PASS"),
  database: "pleroma",
  hostname: System.get_env("PLEROMA_POSTGRESQL_SERVICE_HOST")

# Configure web push notifications
config :web_push_encryption, :vapid_details,
  subject: "mailto:jani.j.k.virtanen@gmail.com",
  public_key: "BNC1h1ziIdfyWI9w2Ja9OAmTi4nkZTMNCwhaZIXprs1meU6olaswiLaL8XkjJ_CbVWK8R5ZOHp9XoC3AyP1CJ8w",
  private_key: "3ZpSo7s49__1S92Z2JLIGOdGR64-k6p1aFGu1c4oI8A"

config :pleroma, :database, rum_enabled: false
config :pleroma, :instance, static_dir: "/var/lib/pleroma/static"
config :pleroma, Pleroma.Uploaders.Local, uploads: "/var/lib/pleroma/uploads"

config :joken, default_signer: "PD1drGp6NaEtJZNdsyev49xcm3Qi08a8AAqJwjeYaBO7REr5LtUrbkOBwwR8se65"

config :pleroma, configurable_from_database: true
