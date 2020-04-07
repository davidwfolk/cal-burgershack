import express from 'express'
import bp from 'body-parser'

let server = express()

const port = 3000

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())


// server.get('/v1/api/tacos', (req, res, next) => { res.send(["street tacos", "burrritos"]) })
// server.get('/v1/api/tacos', (req, res, next) => { res.send(["Giant Tacos", "Giant burrritos"]) })
import BurgerController from "./controllers/BurgerController"
let burgerController = new BurgerController()

server.use('/api/burgers', burgerController.router)




server.use((req, res, next) => {
  res.status(404).send("Route not found")
})



server.listen(port, () => {
  console.log("Server is running on port: ", port, "You better go catch it!")
})