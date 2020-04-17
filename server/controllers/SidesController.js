import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { sidesService } from "../services/SidesService";
import { BadRequest } from "../utils/Errors";

export class SidesController extends BaseController {
  constructor() {
    super("api/sides");
    this.router
      .get("", this.getAll)
      .get("", this.getByTitle)
      .get("/:id", this.getById)
      .put('/:id', this.edit)
      .post("", this.create)
      .delete("/:id", this.remove)
  }

  async edit(req, res, next) {
    try {
      let side = await sidesService.edit(req.params.id, req.body)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      let side = await sidesService.remove(req.params.id)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      if (req.query.title) {
        return next()
      }
      let sides = await sidesService.getAll()
      res.send(sides)
    } catch (error) {
      next(error);
    }
  }

  async getByTitle(req, res, next) {
    try {
      let side = await sidesService.getByTitle(req.query.title)
      if (!side) {
        throw new BadRequest("Invalid side title")
      }
      res.send(side)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let side = await sidesService.getById(req.params.id)
      if (!side) {
        throw new BadRequest("Invalid side Id")
      }
      res.send(side)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let side = await sidesService.create(req.body)
      res.send(side);
    } catch (error) {
      next(error);
    }
  }
}
