# server-express

## Useful codes 

    --- npm init -y
    --- npm intsall express
    --- const express = require('express');
    --- const 'app' = express();
    --- app.listen(num, function(){}); ()
        --- If you don't use airplay on mac, disable it to get access to port 5000
    --- To reboot a node server use control C
    --- app.use(express.static('./server/public'))
        --- app.use sets things up
    --- make sure to make a server folder
    --- npm install can restore all those big installs, especially if .gitignore is targeting nodes_modules
    --- app.get(location, function);
        --- app.get is like an event handler 
        --- in the function in app.get(), you need a req and a rep