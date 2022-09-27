const express = require('express');

const app = express();

app.use(express.static('./server/public'));

app.listen(4200, () => {
    console.log('We\'re live and listening');
});

console.log("Welcome to Serverlund!");