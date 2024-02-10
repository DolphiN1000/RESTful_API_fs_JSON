const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../../", "data");

const updateFileData = async (req, res) => {
  try {
    const files = await fs.readdir(dataPath);
    const fileList = files.map((file) => file.split(".")[0]);
    const fileName = req.params.fileName;
    const fileData = req.body.fileData;

    if (fileList.includes(fileName)) {
      if (!fileData) {
        return res.status(400).json({ error: "Missing fileData" });
      }

      await fs.writeFile(
        path.join(dataPath, `${fileName}.json`),
        JSON.stringify(fileData)
      );
      res.status(200).json({ message: "File updated successfully" });
    } else {
      res.status(404).json({ error: "File not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = updateFileData;
