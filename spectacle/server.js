/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");
var auth = require("http-auth");

var app = express();
var compiler = webpack(config);

const internalAuth = auth.basic({
  realm: 'all',
}, (username, password, callback) => {
  callback(username === 'admin' && password === 'interps');
});

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://172.19.1.14:3000");
});
