require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const cors = require("cors");
const filesRouter = require("./routes/api/filesRouter");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/files", filesRouter);

module.exports = app;
