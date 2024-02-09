const { ctrlWrapper } = require("../../utils");

const addFIleData = require("./addFIleData");
const getFileByName = require("./getFileByName");
const getFilesList = require("./getFilesList");
const removeFileByName = require("./removeFileByName");

module.exports = {
  addFIleData: ctrlWrapper(addFIleData),
  getFileByName: ctrlWrapper(getFileByName),
  getFilesList: ctrlWrapper(getFilesList),
  removeFileByName: ctrlWrapper(removeFileByName),
};
