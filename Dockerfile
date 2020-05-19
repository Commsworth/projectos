FROM node:alpine as builder


WORKDIR '/app'




COPY ./package.json ./



RUN yarn install 
#run package installations


COPY . .


RUN npm run build

RUN ls .

FROM nginx
EXPOSE 6000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
