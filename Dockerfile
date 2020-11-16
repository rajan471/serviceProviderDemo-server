FROM node:10

# Create app directory
WORKDIR /

# Copy source across
COPY . /

# install dependencies
RUN npm install

# execute when docker start
CMD [ "npm", "run", "start" ]
