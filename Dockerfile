FROM node:alpine as builder


WORKDIR '/app'




COPY ./package.json ./



RUN yarn install 
#run package installations


COPY . .


RUN npm run build


CMD "npm" "start"


