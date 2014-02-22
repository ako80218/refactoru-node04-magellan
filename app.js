
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var usersController = require('./controllers/users.js');
var countriesController = require('./controllers/countries.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var currentUser;
app.get('/', usersController.index);
app.get('/:webName', countriesController.index);
app.get('/users', usersController.index);
app.get('/users/:lastName/:webName', countriesController.index);
app.get('/users/:id', function(req, res){
    var id = parseInt(req.params.id);
    console.log('id: ', id);
    currentUser = usersController.findUser(id);
    res.redirect('/users/'+ currentUser.lastName);
});
// app.get('/users/:lastName', function(req, res){
//     res.render('bio', {
//         user:currentUser
//     });
// });



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
