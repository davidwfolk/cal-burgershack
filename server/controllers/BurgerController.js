import express from "express"

let FAKEDB = [
  { id: 1, name: "Mork's Pulled Pork", description: "It is a tastey and decliciso burger" },
  { id: 2, name: "D$ Deluxe", description: "It is a 2 solid steak buns with a nice big ribeye between. Hold the cheese." },
  { id: 3, name: "Meatloaf sando", description: "It is a yummy meatloaf stuffed burger" }
]

export default class BurgerController {
  constructor() {
    this.router = express.Router()
      //NOTE this is already at localhost:3000/api/burgers from inside of main.js
      .get('', this.getAll)
      .get('/:burgerId', this.getOne)
      .post('', this.create)
      .delete('/:burgerId', this.delete)
      .use(this.defaultError)

  }

  defaultError(req, res, next) {
    res.status(404).send("Route not found in the burger controller")
  }

  create(req, res, next) {
    let newBurger = {
      id: FAKEDB.length + 1,
      name: req.body.name || "Unknown Burger",
      description: req.body.description || "It is unknown"
    }
    FAKEDB.push(newBurger)
    res.send({ message: "Successfully created data!", data: newBurger })
  }

  delete(req, res, next) {
    let index = FAKEDB.findIndex(burger => burger.id == req.params.burgerId)
    if (index == -1) {
      return res.status(400).send("Invalid ID")
    }
    FAKEDB.splice(index, 1)
    res.send("DELORTED")
  }

  getAll(req, res, next) {
    res.send(FAKEDB)
  }

  getOne(req, res, next) {
    let foundBurger = FAKEDB.find(burger => burger.id == req.params.burgerId)
    if (!foundBurger) {
      return res.status(400).send("Invalid ID")
    }
    res.send(foundBurger)
  }

}