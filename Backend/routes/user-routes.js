const express = require('express')
const userRouter = express.Router;
const {getAllUsers}=require('../controllers/user-controller');

userRouter.get('/',getAllUsers);
userRouter.post('/signup',signup);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.post('/login',logIn);
userRouter.get('/bookings/:id',getBookingofUser);
userRouter.get('/:id',getUserById);

module.exports = userRouter;