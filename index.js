const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const messages = [
    {
        message: 'Hello'
    },
    {
        message: 'Winter is Coming'
    },
    {
        message: 'Hear me Roar'
    },
    {
        message: "Wubba Dubba Lub Dub!"
    }
]

const app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function (req, res, next) {
    res.status(200).json({ messages: messages });
  });

app.post('/messages', function (req, res, next) {
    messages.push({message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
  });


app.listen(3000, () => {
    console.log(`Listening on Port: ${port}`);
})




