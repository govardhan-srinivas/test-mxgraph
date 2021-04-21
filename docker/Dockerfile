# ##Translation#
# FROM docker.flexwhere.com/translation as translate
# WORKDIR /opt/app
# RUN node index.js project=2ac72717-61b0-4c72-85ce-8f55a82a4b7e format=jsonnested

##Setup##
FROM node:alpine3.10
LABEL author="govardhan@dutchview.com"
# Create app directory
WORKDIR /usr/src/app

# Copy files to nginx
COPY . .
# COPY --from=translate /usr/src/app/i18n /opt/app/i18n

RUN echo $(ls -l)

EXPOSE 8080

# Start nginx server as foreground
CMD [ "npm", "start" ]
