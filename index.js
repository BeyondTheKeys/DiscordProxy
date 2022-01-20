const express = require('express');
var app = express()

var proxy = require('express-http-proxy');

app.use('/', proxy('www.discord.com'));


app.listen(3000);
