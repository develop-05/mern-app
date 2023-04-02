import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation, postCreateValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import * as UseController from './controllers/UseController.js';
import * as PostController from './controllers/UseController.js';


mongoose.connect(
    'mongodb+srv://knikhitskiy2005:w1c2v3@cluster0.hshpgbz.mongodb.net/blog?retryWrites=true&w=majority'
).then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UseController.login)
app.post('/auth/register', registerValidation, UseController.register)
app.get('/auth/me', checkAuth, UseController.getMe)


// app.post('/posts', postCreateValidation, PostController.create)


app.post('/posts', checkAuth, postCreateValidation,  (req, res) => {
    PostController.create
});

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('server OK');
});