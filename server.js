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

  app.post("/workout", ({body}, res) => {
    db.Workout.create(body)
      .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

db.WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total, { duration }) => total + duration, 0);
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
