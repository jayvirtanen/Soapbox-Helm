#!/bin/bash

set -e

echo "-- Waiting for database..."
while ! pg_isready -U pleroma -d postgres://${PLEROMA_POSTGRESQL_SERVICE_HOST}:5432/pleroma -t 1; do
    sleep 1s
done

echo "-- Running migrations..."
$HOME/bin/pleroma_ctl migrate

echo "-- Starting!"
exec $HOME/bin/pleroma start
