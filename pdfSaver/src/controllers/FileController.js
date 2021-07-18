const fileController = module.exports
const fs = require('fs')
const processPath = require('../lib/Path')
const fileService = require('../services/FileService')

fileController.saveNewPDF = async (req, res, next) => {
  const files = req.files
  try {
    if (!files || Object.keys(files).length === 0 || Object.keys(files).length > 1) {
      return res.status(400).send('No files were uploaded.')
    }
    const paths = processPath(process.cwd(), false)

    await fileService.saveNewPDF(files, paths, res)
  } catch (error) {
    res.status(500).send({ error: error.message }).end()
    next(error)
  }
}

fileController.readFile = async (req, res, next) => {
  const params = req.params
  const response = res
  try {
    const dirPath = processPath(params.path, true)
    const dir = await fs.promises.opendir(dirPath.absolutePath)

    await fileService.readNewDirectory(dir, response, dirPath.relativePath)
  } catch (err) {
    res.status(500).send({ error: err.message }).end()
    next(err)
  }
}
