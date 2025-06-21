#!/bin/sh

echo "Aguardando o banco ficar disponível..."
/wait-for-it.sh postgres:5432 -- echo "Banco está pronto"

echo "Executando Prisma..."
npx prisma generate
npx prisma migrate deploy

echo "Iniciando aplicação NestJS..."
node dist/main