const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 8888

var userTable = {};

// app configurations here:
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!\n')
});

app.post('/createUser', (req, res) => {
    res.send('Got a POST request :\n' + JSON.stringify(req.body) + '\n');
    console.log(req.body);
});

app.listen(port, () =>  {
    console.log(`app listening at port ${port}`)
});

