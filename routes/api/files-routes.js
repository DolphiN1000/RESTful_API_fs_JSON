const express = require('express');
const router = express.Router()
const  { createFile, getListFiles, getSinglFile, updateFileData, removeFile } = require("../../controllers/files")

router.post("/create/:file", createFile)
// router.get("/", getListFiles)
// router.get("/:file", getSinglFile)
// router.patch('/update/:id', updateFileData);
// router.delete("/remove/:id", removeFile)

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



module.exports = router;