const express = require("express");
const filesRouter = express.Router();
const {
  addData,
  getFileByName,
  getFilesList,
  updateFileData,
  removeFileByName,
} = require("../../controllers");

filesRouter.post("/", addData);
filesRouter.get("/", getFilesList);
filesRouter.get("/:fileName", getFileByName);
filesRouter.put("/:fileName", updateFileData);
filesRouter.delete("/:fileName", removeFileByName);

module.exports = filesRouter;
