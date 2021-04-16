const router = require("express").Router();

const Workout = require("../../Models/workout");

//prefix /api and are data routes

//create matching url route listeners for the urls in api.js (4 routes from api.js needs 4 routes in here)

//create workout
router.post("/api/workouts", ({ body }, res) => {
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

    Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {

    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body },
           
        },
        { new: true }).then(Workout => {
            res.json(Workout);
        }).catch(err => {
            res.json(err);
        });

});

//get range
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ])
        .sort({ day: 1})
        .limit(7)
        .then((Workout) => {
          res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router