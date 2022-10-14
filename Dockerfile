FROM ubuntu:22.04 as build

ARG MIX_ENV=prod \
    OAUTH_CONSUMER_STRATEGIES="twitter facebook google microsoft slack github keycloak:ueberauth_keycloak_strategy" \
    DEBIAN_FRONTEND=noninteractive

RUN apt-get update &&\
    apt-get install -y git elixir erlang-dev erlang-nox build-essential cmake libssl-dev libmagic-dev automake autoconf libncurses5-dev git &&\
    git clone https://gitlab.com/soapbox-pub/rebased &&\
    mix local.hex --force &&\
    mix local.rebar --force

COPY prod.secret.exs /rebased/config/prod.secret.exs

RUN cd rebased &&\
    mix deps.get --only prod &&\
    mkdir release &&\
    mix release --path release



FROM ubuntu:22.04

ARG BUILD_DATE
ARG VCS_REF

LABEL maintainer="MAINTAINER" \
    org.opencontainers.image.title="pleroma" \
    org.opencontainers.image.description="Pleroma Image for K8S" \
    org.opencontainers.image.authors="MAINTAINER" \
    org.opencontainers.image.vendor="pleroma.social" \
    org.opencontainers.image.documentation="https://git.pleroma.social/pleroma/pleroma" \
    org.opencontainers.image.licenses="AGPL-3.0" \
    org.opencontainers.image.url="INSTANCE URL" \
    org.opencontainers.image.revision=$VCS_REF \
    org.opencontainers.image.created=$BUILD_DATE

ARG HOME=/opt/pleroma
ARG DATA=/var/lib/pleroma
ARG DEBIAN_FRONTEND=noninteractive

RUN apt update &&\
	apt install -y --no-install-recommends postgresql-client net-tools libmagic-dev imagemagick ffmpeg libimage-exiftool-perl unzip libssl-dev libncurses5-dev unzip curl &&\
	adduser --system --shell /bin/false --home ${HOME} pleroma &&\
	mkdir -p ${DATA}/uploads &&\
	mkdir -p ${DATA}/static &&\
	chown -R pleroma ${DATA} &&\
	mkdir -p /etc/pleroma &&\
	chown -R pleroma /etc/pleroma 

COPY docker-entrypoint.sh ${HOME}/docker-entrypoint.sh

RUN chmod 777 ${HOME}/docker-entrypoint.sh

USER pleroma

ENV LC_ALL=C.UTF-8

ENV DB_USER=pleroma

COPY --from=build --chown=pleroma:0 /rebased/release ${HOME}

RUN ls ${HOME}

COPY static ${DATA}/static

COPY prod.secret.exs /etc/pleroma/config.exs

EXPOSE 4000

ENTRYPOINT ["/opt/pleroma/docker-entrypoint.sh"]
