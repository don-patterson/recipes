FROM node:13
RUN groupadd -r web-user \
  && useradd --no-log-init -rmg web-user web-user
WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm ci
USER web-user
CMD ["npm", "start"]
