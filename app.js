// server.js
'use strict'
const jsonServer = require('json-server');
const _jsonExtender = require('json-server-extension');

//options:
//fullPath:fullpath for the combined object
//generatedPath:the path where the generated files will be found
//staticPath:the path where the static files will be found
const jsonExtender = new _jsonExtender({filePath:'./db_extends.json',
                                        generatedPath:'./generated',
                                        staticPath:'./static'})

//register accacpt array of generators or path to the generator scripts
//const funcs =  Object.keys(generators).map(key => generators[key])
jsonExtender.register('../../../generators');
jsonExtender.generate().then((data)=>{
  console.log(`wow ${data}`);
  var server = jsonServer.create()
  var router = jsonServer.router('./db_extends.json')
  var middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(4000, function () {
    console.log('JSON Server is running')
  })

}).catch((e) => {console.log(e)});
