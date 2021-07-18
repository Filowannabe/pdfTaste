const path = require('path')
const storage = require('../storage')

const slash = process.platform === 'win32' ? '\\' : '/'

const processPath = (urlPath, read) => {
  const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash
  if (read) {
    const absolutePath = path.join(storage, relativePath)

    return { relativePath, absolutePath }
  } else {
    const serverPath = relativePath + slash + 'media' + slash
    const clientPath = process.env.CLIENT_HOME_PAGE + 'docs' + slash
    return { serverPath, clientPath }
  }
}

module.exports = processPath
