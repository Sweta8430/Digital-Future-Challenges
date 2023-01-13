import Users from "../models/user.model.js";
import express from "express";
export const router = express.Router();

router.route(`/`).post((req, res) => {
  const { email, pwd } = req.body;
  Users.findOne({ email }, (err, user) => {
    if (user && pwd === user.pwd) {
      res.send({ message: `Login successful!`, user });
    } else {
      res.send({ message: `Username or Password Wrong! Please try again!` });
    }
  });
});
