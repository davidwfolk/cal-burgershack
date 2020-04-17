import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { combosService } from "../services/CombosService";
import { BadRequest } from "../utils/Errors";

export class CombosController extends BaseController {
  constructor() {
    super("api/combos");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put('/:id', this.edit)
      .post("", this.create)
      .delete("/:id", this.remove)
  }

  async edit(req, res, next) {
    try {
      let combo = await combosService.edit(req.params.id, req.body)
      res.send(combo)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      let combo = await combosService.remove(req.params.id)
      res.send(combo)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let combos = await combosService.getAll()
      res.send(combos)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let combo = await combosService.getById(req.params.id)
      if (!combo) {
        throw new BadRequest("Invalid combo Id")
      }
      res.send(combo)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let combo = await combosService.create(req.body)
      res.send(combo);
    } catch (error) {
      next(error);
    }
  }
}
