const router = require("express").Router();

const Workout = require("../../Models/workout");

//prefix /api and are data routes

//create matching url route listeners for the urls in api.js (4 routes from api.js needs 4 routes in here)

//create workout
router.post("/api/workouts", ({body}, res) => {
    const workout = new Workout(body);
    
    Workout.create(workout)
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

//get last workout
router.get("/api/workouts", (req, res) => {
    
    Workout.find()
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

//add exercise 
router.put("/api/workouts/:id", ({body}, res) => {
    
    Workout.findByIdAndUpdate({_id}, { $push: {exercises: body}}, {new: true })
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

//get range
router.get("/api/workouts/range", (req, res) => {
    
    Workout.find()
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});


module.exports = router