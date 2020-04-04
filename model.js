
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // schema information here about fields
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },
    },
    {
      toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }

);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;





