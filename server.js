const express = require('express');
const colors=require('colors')
const dotenv=require('dotenv').config()
const port=process.env.PORT||5000
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')


connectDB();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/vendors',require('./Routes/VendorsRoutes'));
app.use('/api/users',require('./Routes/UserRoutes'));


app.use(errorHandler);
app.listen(port,()=>console.log(`Server started on port ${port}`));