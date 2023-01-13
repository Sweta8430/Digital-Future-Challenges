import express from "express";
import { check, validationResult } from "express-validator";
import Peeps from "../models/peeps.model.js";
export const router = express.Router();

router
  .route(`/`)
  .post(
    [
      check("author").exists().trim().escape(),
      check("title").exists().trim().escape(),
      check("message").exists().trim().escape(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          message: `There is a Error in Peep Data`,
        });
      }
      const peepsData = new Peeps(req.body);
      try {
        const peeps = await peepsData.save();
        res.status(201).json(peeps);
      } catch {
        res.status(400).json({
          message: `Peeps Insertion Fails`,
        });
      }
    }
  );
