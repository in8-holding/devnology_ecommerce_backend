#!/usr/bin/env sh
# https://github.com/vishnubob/wait-for-it

host=$1
shift
cmd="$@"

until nc -z $host; do
  echo "Waiting for $host..."
  sleep 1
done

exec $cmd