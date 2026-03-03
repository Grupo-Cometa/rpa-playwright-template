FROM node:lts AS builder

WORKDIR /var/www

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:lts AS runner

WORKDIR /var/www

ENV TZ=America/Cuiaba
ENV NODE_ENV=production

RUN apt-get update && apt-get install -y cron tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo "$TZ" > /etc/timezone && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=builder /var/www/package.json ./
COPY --from=builder /var/www/node_modules ./node_modules
COPY --from=builder /var/www/dist ./dist
COPY --from=builder /var/www/.env ./

RUN npx -y playwright install --with-deps --only-shell chromium

CMD ["bash", "-c", "cron && npm run bootstrap"]