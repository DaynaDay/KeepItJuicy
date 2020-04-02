
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // schema information here about fields
    },
    {
      toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
      }
    }

)};
