const livereload = require('livereload')
const server = livereload.createServer({
  exts: ['css', 'html', 'js', 'gsp'],
  extraExts: []
})
server.watch(__dirname + '/client')
