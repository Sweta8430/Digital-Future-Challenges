import express from "express";
import Peeps from "../models/peeps.model.js";
export const router = express.Router();

router.route(`/`).get((req, res) => {
  Peeps.find({}, (error, peepsdata) => {
    error
      ? res.status(404).json({ message: `Peeps collection not found in DB` })
      : res.status(200).json(peepsdata);
  });
});
