const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../../", "data");

const getFilesList = async (req, res) => {
  try {
    const files = await fs.readdir(dataPath);
    const fileList = files.map((file) => ({
      fileName: file.split(".")[0],
      filePath: path.join(dataPath, file),
    }));
    res.status(200).json(fileList);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = getFilesList;
