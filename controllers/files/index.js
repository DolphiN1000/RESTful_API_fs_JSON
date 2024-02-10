const ctrlWrapper = require("../../utils");

const addData = require("./addData");
const getFileByName = require("./getFileByName");
const getFilesList = require("./getFilesList");
const removeFileByName = require("./removeFileByName");
const updateFileData = require("./updateFileData");

module.exports = {
  addData: ctrlWrapper(addData),
  getFileByName: ctrlWrapper(getFileByName),
  getFilesList: ctrlWrapper(getFilesList),
  removeFileByName: ctrlWrapper(removeFileByName),
  updateFileData: ctrlWrapper(updateFileData),
};
