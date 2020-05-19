FROM node:alpine as builder


WORKDIR '/app'




COPY ./package.json ./



RUN yarn install 
#run package installations


COPY . .


RUN npm run build

EXPOSE 6000

CMD "npm" "start"


