FROM node:lts

ENV TZ=America/Cuiaba
WORKDIR /var/www

RUN echo $TZ > /etc/timezone && \
    apt-get update && \
    apt-get install -y --no-install-recommends cron tzdata && \
    rm -rf /var/lib/apt/lists/* && \
    rm /etc/localtime && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata && \
    apt-get clean

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npx playwright install chromium --with-deps

CMD ["bash", "-c", "cron && npm run bootstrap"]