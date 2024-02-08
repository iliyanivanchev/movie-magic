const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');

const app = express();
const PORT = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose.connect(`mongodb://127.0.0.1:27017/magic-movies`)
    .then(() => {
        console.log(`DB Connected`);
        
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
    })
    .catch(err => console.log('Cannot connect to DB'));
    