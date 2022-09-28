const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let comments =  ['Love the net!', 'No you don\'t', 'I am a robot, I cannot love'
]

let secretMessage = ['Pluto is a real planet, don\'t let NASA lie to you']

app.use(express.static('./server/public'));

app.use(bodyParser.urlencoded({extended: true}))

// The GET /comments endpoint
app.get('/comments', (req, res) => {
    console.log('Let them read comments!');
    res.send(comments);
});

// The GET /comments/first endpoint
app.get('/comments/first', (req, res) => {
    res.send(comments[0]);
})

app.get('/secret-message', (req, res)=>{
    res.send(secretMessage);
})

app.post('/comments', (req,res)=>{
    let brandNewComment = {};
    comments.push(brandNewComment);
    
    res.sendStatus(201);
})

app.listen(4200, () => {
    console.log('We\'re live and listening');
});

console.log("Welcome to Serverlund!");