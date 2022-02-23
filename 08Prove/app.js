const PORT = process.env.PORT || 8080;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const professionalRoute = require('./routes/professional');

app.use(bodyParser.json());
app.use(express.static(path.join(path.dirname(process.mainModule.filename), 'public')));

app.use((req, res, next) => {
    //allow access to any client
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH,  DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(professionalRoute);

app.listen(PORT);