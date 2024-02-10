require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const fs = require('fs').promises;
const path = require('path');
const dataPath = path.join(__dirname, "data");
const cors = require("cors");
// const {filesRouter} = require("./routes/api");
const {addData, getFilesList, getFileByName, removeFileByName, updateFileData} = require('./controllers');

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.post('/files', addData) 

app.get('/files', getFilesList);

app.get('/files/:fileName', getFileByName);

app.put('/files/:fileName', updateFileData);

app.delete('/files/:fileName', removeFileByName);


module.exports = app;
