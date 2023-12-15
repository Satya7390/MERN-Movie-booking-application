const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');

dotenv.config();// metods to utilize entire kind of code an all
const cors = require('cors');
app.use(cors());
app.use((req,res,next) => {
    res.header('Access-Controller-Allow-Origin', '*');
    res.header('Access-Controller-Allow-Methods', 'GET','POST', 'PUT', 'DELETE');
    res.header('Access-Controller-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// middleware section

app.use(express.json());
app.use('/users',userRouter);
app.use('/admin',adminRouter);
app.use('/movies',movieRouter);
app.use('/booking',bookingRouter);
// app.use('/',(req,res,next)=>{
//     res.send("<h1>Hello Satya!! How are you ?<h1>");
// })


mongoose.connect("mongodb+srv://satyanandgupta:Satyamongo12@december-cluster.1p0l4ma.mongodb.net/").then(()=> app.listen(2500, () =>
    console.log("Conncet to the server + port")
))

.catch(e => console.log(e)); // for error message

