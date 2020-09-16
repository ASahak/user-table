const express = require('express');
const loaders = require('./loaders');
const http = require('http');
const path = require('path');
const { port } = require('./config');
const _dev = process.env.NODE_ENV !== 'production';

class App {
  static start () {
    (async () => {
      this.server = express();
      await loaders.init({expressApp: this.server});

      const server = http.createServer(this.server);

      server.listen(port, () => {
        console.info(`Listening ${server.address().port} port`);
      });
    })();
  }
}
App.start();
