const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../../", "data");

const getFileByName = async (req, res) => {
  try {
    const fileName = req.params.fileName;
    const filePath = path.join(dataPath, `${fileName}.json`);

    const fileContent = await fs.readFile(filePath, "utf8");
    const fileData = JSON.parse(fileContent);

    res.status(200).json(fileData);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).json({ error: "File not found" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

module.exports = getFileByName;
