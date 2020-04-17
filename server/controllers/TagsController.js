import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { tagsService } from "../services/TagsService";
import { BadRequest } from "../utils/Errors";

export class TagsController extends BaseController {
  constructor() {
    super("api/tags");
    this.router
      .get("", this.getAll)
      .get("/:tagId", this.getById)
      .put('/:tagId', this.edit)
      .post("", this.create)
      .delete("/:tagId", this.remove)
  }

  async edit(req, res, next) {
    try {
      let tag = await tagsService.edit(req.params.tagId, req.body)
      res.send(tag)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      let tag = await tagsService.remove(req.params.tagId)
      res.send(tag)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let tags = await tagsService.getAll()
      res.send(tags)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let tag = await tagsService.getById(req.params.tagId)
      if (!tag) {
        throw new BadRequest("Invalid tag Id")
      }
      res.send(tag)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let tag = await tagsService.create(req.body)
      res.send(tag);
    } catch (error) {
      next(error);
    }
  }
}
