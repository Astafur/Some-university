const express        = require('react');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = react();

const port = 3000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
