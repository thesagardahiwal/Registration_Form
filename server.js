const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/registrationDB');


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    address: String,
    phone: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Registration failed');
    }
});

app.get("/", (req, res) => {
    res.render('./public/index.html')
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Failed to fetch users');
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
