FROM node:lts

WORKDIR /var/www

COPY . .

ENV TZ=America/Cuiaba

RUN echo $TZ > /etc/timezone && \
    apt-get update && apt-get install -y \
    cron\
    libnss3\                      
    libnspr4\                                    
    libatk1.0-0\                                 
    libatk-bridge2.0-0\                          
    libcups2\                                    
    libdrm2\                                     
    libdbus-1-3\                                 
    libxkbcommon0\                               
    libatspi2.0-0\                               
    libxcomposite1\                              
    libxdamage1\                                 
    libxfixes3\                                  
    libxrandr2\                                  
    libgbm1\                                     
    libasound2\
    tzdata \
    && \
    rm /etc/localtime && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata && \
    apt-get clean

RUN npm install

RUN npm run build

RUN npx playwright install chromium

RUN touch /var/log/cron.log
RUN chmod 777 /var/log/cron.log

CMD bash -c "cron && npm run bootstrap"