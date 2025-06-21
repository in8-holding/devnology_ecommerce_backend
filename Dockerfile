FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY scripts/wait-for-it.sh /wait-for-it.sh
COPY scripts/entrypoint.sh /entrypoint.sh

RUN chmod +x /wait-for-it.sh /entrypoint.sh

RUN npm run build

EXPOSE 3001

CMD ["/entrypoint.sh"]