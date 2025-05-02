FROM node:lts-slim AS builder

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:lts-slim AS runner

WORKDIR /var/www
ENV TZ=America/Cuiaba

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get install -y --no-install-recommends \
    cron \
    ca-certificates \
    tzdata \
    procps \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npx playwright install chromium --with-deps

COPY --from=builder /var/www/dist dist
COPY --from=builder /var/www/.env .env
COPY --from=builder /var/www/package.json package.json
COPY --from=builder /var/www/node_modules node_modules

CMD ["bash", "-c", "cron && npm run bootstrap"]