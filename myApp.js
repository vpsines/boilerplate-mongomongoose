require("dotenv").config();
const mongoose = require("mongoose");
let validator = require("validator");

let mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
  // name: {
  //   type: String,
  //   required: true,
  // },
  // age: {
  //   type: Number,
  //   validate: (value) => {
  //     return validator.isNumber();
  //   },
  // },
  // favoriteFoods: {
  //   type: [String],
  //   length: 5,
  // },
});

var Person = mongoose.model("Person", personSchema);

var createAndSavePerson = function (done) {
  var p = new Person({
    name: "Vyshnav",
    age: 23,
    favoriteFoods: ["Biriyani", "Alfam"],
  });
  p.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  { name: "Vyshnav", age: 23, favoriteFoods: ["Biriyani", "Alfam"] },
  { name: "Sunny", age: 21, favoriteFoods: ["Biriyani"] },
  { name: "Usopp", age: 25, favoriteFoods: [ "Alfam"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var personName = "Vsyhanv";

const findPeopleByName = (personName, done) => {
  Person.find({"name":personName},function(err,data){
    if(err) return console.error(err);
    done(null,data);
  });
};

var food = "Biriyani";
const findOneByFood = (food, done) => {
  Person.findOne({"favoriteFood":[food]}, function(err,data){
    if(err) return console.error(err);
    done(null,data);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
