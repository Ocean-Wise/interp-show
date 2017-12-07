FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV NODE_ENV $app_env

RUN mkdir -p /spectacle
WORKDIR /spectacle
COPY ./ ./

RUN npm install

CMD if [ ${NODE_ENV} = production ]; \
  then \
  npm run build; \
  else \
  npm start; \
  fi

EXPOSE 3000
