import express from "express";
import dotenv from "dotenv";
import { router as indexRouter } from "./routes/indexRouter.js";
import { router as gameRouter } from "./routes/gameRouter.js";
import { router as resultRouter } from "./routes/resultRouter.js";
import { router as homeRouter } from "./routes/homeRouter.js";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

let app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(`/`, homeRouter);
app.use(`/index`, indexRouter);
app.use(`/game`, gameRouter);
app.use(`/result`, resultRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`App is listening at http://localhost:${process.env.PORT}`);
});
export default server;
