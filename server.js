const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://admin:root@cluster0.vwjp1.mongodb.net/curso-basico-mearn', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('MongoDB CONECTADO com sucesso!')
  }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
});

app.listen(3333, () => {
  console.log(`🚀 Server runing on port ${port}`)
})