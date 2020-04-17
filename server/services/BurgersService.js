import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgersService {
  async edit(burgerId, body) {
    let burger = await dbContext.Burgers.findByIdAndUpdate(burgerId, body, { new: true })
    return burger
  }
  async remove(burgerId) {
    let burger = await dbContext.Burgers.findByIdAndDelete(burgerId)
    return burger
  }
  async create(body) {
    let burger = await dbContext.Burgers.create(body)
    return burger
  }
  async getAll(query = {}) {
    let burgers = await dbContext.Burgers.find(query).populate("tags");
    return burgers;
  }
  async getById(id) {
    let burger = await dbContext.Burgers.findById(id);
    if (!burger) {
      throw new BadRequest("Invalid Id");
    }
    return burger;
  }
}

export const burgersService = new BurgersService();