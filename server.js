const cr = require('crypto-js');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const fs = require('fs');
const loginData = require('./login_data.json');
const cart_data = require('./pccart/src/cartdata.json');
const sf = require('./classifier');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var users = {}

app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.get('/', (req, res) => {
    res.send({ express: name });
});

app.post('/logout', (req, res) => {
    if (req.body.hash == null || users[req.body.hash].login == false) {
        res.send({ log: "please sign in first." });
    }
    else {
        users[req.body.hash].login = false;
        res.send({log : "Success"})
    }
});

app.post('/postToCart', (req, res) => {
    console.log(req.body);
    console.log('Hit');

    if (users[req.body.hashData] == null || users[req.body.hashData].login == false) {
        console.log('Invalid / Inactive user');
        res.send({ log: "invalid or inactive user" });
    }

    cart_data.push({ "username": users[req.body.hashData].username, "data": req.body })
    fs.writeFile('./pccart/src/cartdata.json', JSON.stringify(cart_data), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Append Successful");
        }
    });
    res.send({ info: "OK" });
});

app.post('/loginTrial', (req, res) => {
    var index = -1;
    for (let x = 0; x < loginData.length; x++) {
        if (loginData[x].username == req.body.username) {
            index = x;
            break;
        }
    }
    if (index == -1) {
        res.send({ stat: 'Failed', reason: 'Invalid Username', authenticationIndex: -1 });
    }
    else if (loginData[index].password == req.body.password) {
        console.log("Match found");
        const hash = cr.SHA256(req.body.password + req.body.username);
        console.log("Username : " + req.body.username + " HASH : " + hash);
        users[hash] = { username: req.body.username, password: req.body.password, login: true };
        res.send({ stat: 'Successful', authenticationHash: hash.toString() });
    }
    else {
        res.send({ stat: 'Failed', reason: 'Wrong Password', authenticationIndex: -1 });
    }
    // send response here

});

app.post('/search', (req, res) => {
    res.send({ url: sf(req.body.query) });
});

app.post('/createAccount', (req, res) => {
    var index = -1;
    console.log(req.body.username, req.body.password)
    for (let x = 0; x < loginData.length; x++) {
        if (loginData[x].username == req.body.username) {
            index = x;
            break;
        }
    }
    if (index == -1) {
        console.log("Account Created");
        loginData.push({ username: req.body.username, password: req.body.password, items: [] })
        fs.writeFile('./login_data.json', JSON.stringify(loginData), (err) => {
            if (err) {
                console.log("Error " + err);
                res.send({ stat: 'Failed', reason: err });
            }
        })
        res.send({ stat: 'Successful' });
    }

    else {
        console.log("Username Taken");
        res.send({ stat: 'Failed', reason: 'Username taken' });
    }
    // send response here

});
app.listen(port, () => { console.log(`Listening to port ${port}`) });