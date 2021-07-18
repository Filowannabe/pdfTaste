const express = require('express')
const routes = require('./controllers/routes')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())

app.use(fileUpload())

const PORT = 3001

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
