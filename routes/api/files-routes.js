const express = require("express");
const filesRouter = express.Router();
const {
  addData,
  getListFiles,
  getSinglFile,
  updateFileData,
  removeFile,
} = require("../../controllers");

filesRouter.post("/create/",
() => {console.log('add file data')},
 addData
 )
 ;
// async (req, res) => {
//   try {
//     const fileName = req.body.fileName;
//     const fileData = req.body.fileData;

//     if (!fileName || !fileData) {
//       return res.status(400).json({ error: "Missing fileName or fileData" });
//     }

//     await fs.writeFile(
//       path.join(dataPath, `${fileName}.json`),
//       JSON.stringify(fileData)
//     );
//     res.status(201).json({ message: "File created successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });
filesRouter.get("/", getListFiles)
filesRouter.get("/:file", getSinglFile)
filesRouter.patch('/update/:id', updateFileData);
filesRouter.delete("/remove/:id", removeFile)

// function createFile(req, res){
//     let file = req.params.file
//     if (file == 'readme'){
//         return res.status(403).json({message : "Forbidden"})
//     }
//     //console.log(req.body)
//     try {
//         let data = JSON.parse(req.body.data)
//         console.log("DATA: ", data)

//         fs.writeFileSync(`db/${file}.json`,JSON.stringify(data))
//         res.status(201).json(data)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message : "Error al crear el archivo"})
//         }
// }

module.exports = filesRouter;
