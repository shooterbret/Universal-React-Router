const express = require('express');

const app = express();
const path = require('path');
const favicon = require('serve-favicon');

//https://github.com/webpack/webpack/issues/1599
//http://stackoverflow.com/questions/29911491/using-webpack-on-server-side-of-nodejs
//app.close();

console.log("Server RESTARTED ------------------");

app.use(favicon(__dirname + './../public/favicon.ico')); //Handles FavIcon
app.use(express.static('public'));

if ( app.get('env') === 'development' ) {
    require('./modes/devMode')(app);
}else if (app.get('env') === 'production'){
}

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});