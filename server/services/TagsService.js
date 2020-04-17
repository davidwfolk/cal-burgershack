import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TagsService {
  async edit(tagId, body) {
    let tag = await dbContext.Tags.findByIdAndUpdate(tagId, body, { new: true })
    return tag
  }
  async remove(tagId) {
    let tag = await dbContext.Tags.findByIdAndDelete(tagId)
    return tag
  }
  async create(body) {
    let tag = await dbContext.Tags.create(body)
    return tag
  }
  async getAll(query = {}) {
    let tags = await dbContext.Tags.find(query);
    return tags;
  }
  async getById(id) {
    let tag = await dbContext.Tags.findById(id);
    if (!tag) {
      throw new BadRequest("Invalid Id");
    }
    return tag;
  }
}

export const tagsService = new TagsService();