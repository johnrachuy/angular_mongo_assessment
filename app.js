var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/hero_app');
mongoose.model(
    'Hero_Post',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String,
            "power_name": String
        },
        {
            collection: 'Heroes'
        }
    ));

var Hero_Post = mongoose.model('Hero_Post');

app.post('/hero', function(req, res) {
    var newPost = new Hero_Post({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power,
        "power_name": req.body.power_name
    });

    newPost.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero_Post.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });
});

//app.get('/power_names', function(req, res) {
//    console.log('here');
//    SuperPowers.find({}, function(err, data) {
//        if(err) {
//            console.log('ERR: ', err);
//        }
//
//        res.send(data);
//        console.log(data);
//    });
//});

app.get('/hero', function(req, res) {
    console.log('here');
    Hero_Post.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        console.log(data);
    });
});

app.delete('/hero/:id', function(req, res) {
    Hero_Post.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});