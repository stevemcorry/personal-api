var user = require('../user.js');
var skilz = require('../skilz.js');
var secrets = require('../secrets.js');
module.exports = {
  getName: function(req, res, next){
    res.json(user.name);
  },
  getLocation: function(req, res, next){
    res.json(user.location);
  },
  getOccupation: function(req, res, next){
    res.json(user.occupations);
  },
  getLastOccupation: function(req, res, next){
    res.json(user.occupations[user.occupations.length -1]);
  },
  getHobbies: function(req, res, next){
    res.json(user.hobbies);
  },
  getHobbiesType: function(req,res,next) {
    var filteredHobbies = user.hobbies.filter( function(value) {
        return (value.type === req.params.type);
      });
    res.json(filteredHobbies);
  },
  getFamily: function(req, res, next){
    res.json(user.family);
  },
  getFamilyGender: function(req,res,next) {
    var familyGender = user.family.filter( function(value) {
      return (value.gender === req.params.gender);
    });
    res.json(familyGender);
  },
  getRestaurants: function(req, res, next){
    res.json(user.restaurants);
  },
  getRestaurantName: function(req,res,next) {
    var restaurantName = user.restaurants.filter( function(value) {
      return (value.name === req.params.name);
    });
    res.json(restaurantName);
  },
  updateName:function(req,res,next) {
    user.name = req.body.name;
    res.json(user.name);
  },
  updateLocation:function(req,res,next) {
    user.location = req.body.location;
    res.json(user.location);
  },
  createHobbies: function(req,res,next){
    user.hobbies.push(req.body);
    res.json(user.hobbies);
  },
  createOccupation: function(req,res,next){
    user.occupations.push(req.body);
    res.json(user.occupations);
  },
  createFamily: function(req,res,next){
    user.family.push(req.body);
    res.json(user.family);
  },
  createRestaurant: function(req,res,next){
    user.restaurants.push(req.body);
    res.json(user.restaurants);
  },
  getSkilz: function(req,res,next) {
    res.json(skilz);
  },
  getSkilzExp: function(req,res,next){
    var skilzExp = skilz.filter( function(value) {
      return (value.experience === req.params.exp);
    });
    res.json(skilzExp);
  },
  createSkilz: function(req,res,next) {
    skilz.push(req.body);
    res.json(skilz);
  },
  getSecrets: function(req,res,next) {
    if(req.params.username === 'steveboy'&& req.params.pin === '101'){
      res.json(secrets);
    } else  { res.json('not today loser');}
  }

};
