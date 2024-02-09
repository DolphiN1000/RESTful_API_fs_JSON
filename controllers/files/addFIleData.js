const addFileData = async (req, res) => {
  const { fileName, data } = req.body;
  try {
    await FileSystem.writeFile(`${fileName}.json`, JSON.stringify(data))
    res.status(201).send('File created success')
  }
  catch {
    if (error) throw error (404, 'Error creating file');
  }
};
