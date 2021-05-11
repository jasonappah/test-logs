FROM node:14-slim

ENV SERVER

COPY . /home/app
WORKDIR /home/app

RUN yarn

# Running the app
CMD "yarn" "run" "start"
