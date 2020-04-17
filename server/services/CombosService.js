import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CombosService {
  async edit(id, body) {
    let combo = await dbContext.Combos.findByIdAndUpdate(id, body, { new: true })
    return combo
  }
  async remove(id) {
    let combo = await dbContext.Combos.findByIdAndDelete(id)
    return combo
  }
  async create(body) {
    let combo = await dbContext.Combos.create(body)
    return combo
  }
  async getAll(query = {}) {
    let combos = await dbContext.Combos.find(query);
    return combos;
  }

  // async getBySide(sideId) {
  //   let combos = await dbContext.Combos.find({ sides: sideId })
  // }
  async getById(id) {
    let combo = await dbContext.Combos.findById(id).populate('burger side', "title description");
    if (!combo) {
      throw new BadRequest("Invalid Id");
    }
    return combo;
  }
}

export const combosService = new CombosService();