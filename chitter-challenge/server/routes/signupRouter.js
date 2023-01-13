import express from "express";
import { check, validationResult } from "express-validator";
import Users from "../models/user.model.js";

export const router = express.Router();
router
  .route(`/`)
  .post(
    [
      check("fname").exists().trim(),
      check("lname").exists().trim(),
      check("userhandler").exists().trim(),
      check("email").isEmail().exists(),
      check("pwd").exists(),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: `There is an Error in User Data`,
          errors: errors,
        });
      }
      const { email } = req.body;
      Users.findOne({ email }, (err, user) => {
        if (user) {
          res.send({ message: `User already exists!` });
        } else {
          const user = new Users(req.body);
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ message: `Registration successful`, user });
            }
          });
        }
      });
    }
  );
