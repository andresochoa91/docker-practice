FROM node:14.15.4

WORKDIR /usr/src/nodeapi

COPY ./ ./

RUN npm install 

CMD ["/bin/bash"]