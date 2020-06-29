const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 8888

var userTable = {};

// app configurations here:
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

/**
 * We'll define a bunch of different endpoints to hit
 * and maintain a list of users currently connected
 * and then we'll update every user any time one of the endpoints are hit
 * not really sure how it'll actually work but this is the plan so far
 */

app.get('/', (req, res) => {
    res.send('Hello World!\n')
});

/**
 * 
 */
app.post('/createUser', (req, res) => {
    res.send('Got a POST request :\n' + JSON.stringify(req.body) + '\n');
    console.log(req.body);
});

/**
 * Expecting to receive requests of the form
 * {
 *      "user" : <user>,
 *      "word" : <word>
 * }
 * Where the <user> will be associated with a certain user
 * and the word will be their word for this game
 * we'll only allow the adding of a word once a user has been created
 */
app.post('/addWord', (req, res) => {
    // error check first

    if(req && req.body && req.user && req.word) {
        var data = req.body;
        var user = data.user;
        var word = data.word;
        
    }
});

/**
 * Will use this endpoint to clear out the words and whatnot
 */
app.delete('/clearAll', () => {

});

app.listen(port, () =>  {
    console.log(`app listening at port ${port}`)
});

