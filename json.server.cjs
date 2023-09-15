const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(require('./json.router.cjs'))
const middleware = jsonServer.defaults()

const JSON_SERVER_PORT = process.env.VITE_JSON_SERVER_PORT

const customRoutes = {
  '/users': '/users',
}

server.use(middleware)

server.use(jsonServer.rewriter(customRoutes))

server.use(router)

server.listen(JSON_SERVER_PORT, () => {
  console.log('JSON Server is running on port ' + JSON_SERVER_PORT)
})
