const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(
    cors({
      origin: '*',
      credentials: true,
    })
  );
  

function f1() {
    console.log("Hello World...");
}
app.get('/', (req, res) => {
    res.send({ express: 'Your Express Backend is connected to react...' });
});

app.post('/postToCart', (req, res) => {
    console.log(req.body);
    console.log(req);
    f1();
    console.log('Hit');
    fs.appendFile('./data.txt', JSON.stringify(req.body)+`\n`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Append Successful");
        }
    });
    res.send({info : "OK"});
});


app.listen(port, () => { console.log(`Listening to port ${port}`) });