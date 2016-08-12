/* --------- DEPENDENCIES --------- */
var express = require('express');
var bodyParser = require('body-parser');

var knex = require('knex')({
    client: 'pg',
    connection: {
        database: 'OpenICSMailingList'
    },
});

/* --------- GLOBAL VARIABLES --------- */
var jsonParser = bodyParser.json();
var app = express();

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ----------- USER ENDPOINTS ---------- */

// POST NEW CONTACTS TO MAILING LIST
app.post('/users', jsonParser, function(request, response) {
    var email = request.body.email.trim();
    var firstName = request.body.firstName.trim();
    var lastName = request.body.lastName.trim();
    var occupation = request.body.occupation.trim();

    knex.insert({
        email: email,
        firstName: firstName,
        lastName: lastName,
        occupation: occupation 
        })
        .into('users')
        .then(function() {
            console.log('post new contact success');
            return response.status(201).json({
                message: 'Thanks for your interest! You have been successfully added to our mailing list.'
            });
        })
        .catch(function(error) {
            console.log('post new contact error');
            return response.sendStatus(500);
        });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});
