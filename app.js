const express = require("express");
const cors = require("cors");
const filesRouter = require("./routes/api");

const app = express();
app.use(express.json());

app.use(cors());
app.use("api/files", filesRouter);
