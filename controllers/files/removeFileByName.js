const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../../", "data");

const removeFileByName = async (req, res) => {
  try {
    const fileName = req.params.fileName;
    await fs.unlink(path.join(dataPath, `${fileName}.json`));
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).json({ error: "File not found" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

module.exports = removeFileByName;
