const express = require('express')
require('custom-env').env('staging');
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
const app = express()

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database Connected');
});
mongoose.connection.on('connected', ()=>{
    console.log('Mongoose connected to db')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http//localhost:${port}`)
})