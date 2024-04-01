const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const app = express();
app.use(express.json());
app.use(cors());

// const mongoURL = process.env.MONGOURL

const mongoURL =
  "mongodb+srv://manoj:manoj1234@cluster0.zfeflol.mongodb.net/myusers?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect("process.env.MONGOURL");
// app.post("/register", (req, res) => {
//   UserModel.create(req.body)
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// });

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
connectToDatabase();
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/register", (req, res) => {
  console.log("Hello");
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(3000, () => {
  console.log("server is running");
});
