// CommonJS
// const express = require('express')

// ES6

import express from 'express'

const app = express();



import dotenv from 'dotenv';

dotenv.config();

import 'express-async-errors'
import morgan from 'morgan'
import connectDB_81 from './db/connect_81.js';
import authRoutes_81 from './routes/authRoutes_81.js'


//middleware
import notFoundMiddleware_81 from './middleware/not-found_81.js';
import errorHandler_81 from './middleware/error-handler_81.js';

if (process.env.NODE_ENV !== 'production') {
   app.use(morgan('dev'));
}

app.use(express.json());

// app.use(function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
// });

app.get('/', (req, res) => {
   throw new Error('testing for error')
   res.send('Welcome cici 209410181--');

});

app.use('/api/v1/auth_81', authRoutes_81);

app.use(notFoundMiddleware_81);
app.use(errorHandler_81);



const port = process.env.PORT || 5000;



const start = async () => {

   try {

      await connectDB_81(process.env.MONGO_LOCAL_URL).then(() => {

         console.log('Connecting to MongoDB');

      });



      app.listen(port, () => console.log(`server is running on port ${port}`));

   } catch (err) {

      console.log(err);

   }

}



start();



// app.listen(port, () => console.log(`Server is running on port ${port}`));