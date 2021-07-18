const fileService = module.exports

fileService.saveNewPDF = (files, paths, response) => {
  const mediaToFind = Object.values(files)
  process.cwd()
  mediaToFind.forEach(file => {
    if (file.mimetype === 'application/pdf') {
      file.name = 'local.pdf'
      const uploadPathFromServer = `${paths.serverPath}${file.name}`
      const uploadPathFromClient = `${paths.clientPath}${file.name}`

      file.mv(uploadPathFromServer, (err) => {
        if (err) { throw new Error('Error') }
      })
      file.mv(uploadPathFromClient, (err) => {
        if (err) { throw new Error('Error') }
      })
    }
  })
  response.send('Files uploaded')
}
fileService.readNewDirectory = async (dir, response) => {
  const content = { files: [], directories: [] }

  for await (const dirent of dir) {
    if (dirent.isDirectory()) content.directories.push(dirent.name)
    else content.files.push(dirent.name)
  }

  content.directories.sort()
  content.files.sort()
  response.json({ files: content.files })
}
