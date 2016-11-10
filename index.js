var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.use(express.static('public'));

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupation', mainCtrl.getOccupation);
app.get('/occupation/latest', mainCtrl.getLastOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);
app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.createHobbies);
app.post('/occupation', mainCtrl.createOccupation);
app.post('/family', mainCtrl.createFamily);
app.post('/restaurants', mainCtrl.createRestaurant);
app.get('/skilz', mainCtrl.getSkilz);
app.get('/skilz/:exp', mainCtrl.getSkilzExp);
app.post('/skilz', mainCtrl.createSkilz);
app.get('/secrets/:username/:pin', mainCtrl.getSecrets);

app.listen(3000, function() {
  console.log('daddys here');
});
