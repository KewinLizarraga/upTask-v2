const express = require('express');
// const Sequelize = require('sequelize');
const cors = require('cors');
const { PORT, sequelize, URI_DB } = require('./config');
const router = require('./routes');

require('./models');

sequelize
  .sync()
  .then(() => {
    console.log(`Connection has been established successfully. URI_DB: ${URI_DB}`);
  })
  .catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v2', router);

app.listen(PORT, () => console.log(`API run on PORT ${PORT}`));