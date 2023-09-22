FROM node:18.17.1

WORKDIR /var/www

COPY . .

RUN apt-get update && apt-get install -y \
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
    tzdata 

RUN apt-get clean

ENV TZ=America/Cuiaba

RUN npm ci

RUN npm run build

RUN npx playwright install

RUN chmod 777 /var/www/start.sh

ENTRYPOINT [ "/var/www/start.sh" ]