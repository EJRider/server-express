const express = require('express');

const app = express();

let comments =  ['Love the net!', 'No you don\'t', 'I am a robot, I cannot love'
]

app.use(express.static('./server/public'));

app.get('/comments', (req, res) => {
    console.log('Let them read comments!');
    res.send(comments);
});

app.get('/comments/first', (req, res) => {
    res.send(comments[0]);
})

app.listen(4200, () => {
    console.log('We\'re live and listening');
});

console.log("Welcome to Serverlund!");