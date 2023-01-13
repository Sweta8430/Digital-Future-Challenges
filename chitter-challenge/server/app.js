import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router as getPeepRouter } from "../server/routes/getPeepRouter.js";
import { router as addPeepRouter } from "../server/routes/addPeepRouter.js";
import { router as signupRouter } from "../server/routes/signupRouter.js";
import { router as loginRouter } from "../server/routes/loginRouter.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

let app = express();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log(`Connected to the database at: ${process.env.DBURI}`);
  } catch (e) {
    console.log(`Database failed to connect: ${e.message}`);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(`/peeps`, getPeepRouter);
app.use(`/addpeeps`, addPeepRouter);
app.use(`/signup`, signupRouter);
app.use(`/login`, loginRouter);

dbConnection();

const server = app.listen(process.env.PORT, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT}`);
});
export default server;
