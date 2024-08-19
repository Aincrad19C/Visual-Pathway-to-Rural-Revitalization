FROM node:20

WORKDIR /

ENV TZ="Asia/Shanghai"

COPY . .

RUN npm install 

RUN npm run build

EXPOSE 7001

CMD ["npm", "run", "start"]