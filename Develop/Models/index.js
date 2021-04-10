//wrap models in an object becasuse the seeds call for this (and then export it)

var db = {
    Workout: require("./workout")
}

module.exports = db;
