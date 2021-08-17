FROM node 
WORKDIR /app 
COPY ./package*.json ./
RUN npm install
COPY . .
CMD ["sh","./.scripts/start.sh"]          
