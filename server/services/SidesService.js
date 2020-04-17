import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SidesService {
  async getByTitle(title) {
    let side = await dbContext.Sides.findOne({ title: title })
    return side
  }
  async edit(id, body) {
    delete body.size
    let side = await dbContext.Sides.findByIdAndUpdate(id, body, { new: true })
    return side
  }

  // async editSize(id, body) {
  //   let side = await dbContext.Sides.findById(id)
  //   side.size = body
  //   side.save()
  //   return side
  // }
  async remove(id) {
    let side = await dbContext.Sides.findByIdAndDelete(id)
    return side
  }
  async create(body) {
    let side = await dbContext.Sides.create(body)
    return side
  }
  async getAll(query = {}) {
    let sides = await dbContext.Sides.find(query);
    return sides;
  }
  async getById(id) {
    let side = await dbContext.Sides.findById(id);
    if (!side) {
      throw new BadRequest("Invalid Id");
    }
    return side;
  }
}

export const sidesService = new SidesService();