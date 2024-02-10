const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../../", "data");

const addData = async (req, res) => {
  try {
    const { fileName = "noName" } = req.body;

    const fileData = req.body.fileData;
    if (!fileName || !fileData) {
      return res.status(400).json({ error: "Missing fileName or fileData" });
    }
    await fs.writeFile(
      path.join(dataPath, `file-${Date.now()}-${fileName}.json`),
      JSON.stringify(fileData)
    );
    res.status(201).json({ message: "File created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error1" });
  }
};

module.exports = addData;
