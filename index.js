require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//va el puerto del cluster entre ('')
const uri = 'mongodb+srv://ryu:2e77363e@intercambio.kjjbpgp.mongodb.net/?appName=Intercambio';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

run();

// Import routes
const categoriescontroller = require('./routes/categories-routes-api');
const productscontrollers = require('./routes/products-routes-api');
const usercontroller = require('./routes/user-routes-api');

//use routes
app.use('/categories', categoriescontroller);
app.use('/products', productscontrollers);
app.use('/user', usercontroller);

//debe ser el puerto por defecto el (3000) y va entre comillas paradas (`)
app.listen(5000, () => {
    console.log(`Server running at http://localhost:${5000}`);
  });