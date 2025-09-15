require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const PORT = process.env.PORT || 1234;

const db = process.env.db;
const app = express()
app.use(express.json())


app.use('/api/v1', userRouter)


mongoose.connect(db).then(() => {
  console.log(`Connection to database has been established successfully`);
  app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})
}).catch((error) => {
  console.log(`Error connecting to database` + error.message);
})