const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

db.Workout.create({ name: "Workout" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.post("/submit", ({body}, res) => {
  db.Book.create(body)
    .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});


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

WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total, { duration }) => total + duration, 0);
});