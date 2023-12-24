From node:latest

Workdir /usr/app

copy package.json /usr/app

run npm install 

copy . /usr/app

expose 3000

Entrypoint ["npm", "start"]
