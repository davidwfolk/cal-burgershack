import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";
import { BadRequest } from "../utils/Errors";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .get("/:burgerId", this.getById)
      .put('/:burgerId', this.edit)
      .post("", this.create)
      .delete("/:burgerId", this.remove)
  }

  async edit(req, res, next) {
    try {
      let burger = await burgersService.edit(req.params.burgerId, req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      let burger = await burgersService.remove(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let burgers = await burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let burger = await burgersService.getById(req.params.burgerId)
      if (!burger) {
        throw new BadRequest("Invalid burger Id")
      }
      res.send(burger)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let burger = await burgersService.create(req.body)
      res.send(burger);
    } catch (error) {
      next(error);
    }
  }
}
