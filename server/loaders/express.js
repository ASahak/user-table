const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const cors = require('cors');
const path = require('path');


module.exports = class ExpressLoader {
    static init ({ app }) {
        // View Engine

        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(cors({origin: 'http://localhost:4200'}));

        app.use(express.static('../public'));

        app.get('/home', (req, res) => {
            return res.sendFile('index.html', {
                root: path.join("../public")
            })
        });

        // Api Routes
        app.use('/api', routes);

        return app;
    }
};
