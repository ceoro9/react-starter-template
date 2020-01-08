FROM mhart/alpine-node:12

# Install os packages
RUN apk add dumb-init

# Install node packages
WORKDIR /tmp
COPY package*.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Copy app source code
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

# Expose server port
ENV NODE_ENV=development
ENV UI_ADMIN_PANEL_DEV_SERVER_PORT=9000
EXPOSE 9000

CMD ["dumb-init", "npm", "start"]
