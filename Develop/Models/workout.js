const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Excersize type is Required"
    },

    name: {
      type: String,
      trim: true,
      equired: "Excersize name is Required"
    },

    duration: {
      type: Number,
      trim: true,
      required: "How long did you excersize?"
    },
    weight: {
      type: Number,
      trim: true,
    },
    reps: {
      type: Number,
      trim: true,
    },
    sets: {
      type: Number,
      trim: true,
    },
    distance: {
      type: Number,
      trim: true,
    },
  }],
  totalDuration : {
    type: Number,
    default: 0,
  }
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
