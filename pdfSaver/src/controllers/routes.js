const express = require('express')
const router = express.Router()
const fileController = require('./FileController')

router.post('/upload', fileController.saveNewPDF)
router.get('/:path', fileController.readFile)

module.exports = router
