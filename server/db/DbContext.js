import BurgerSchema from "../models/Burger";
import SideSchema from "../models/Side";
import ComboSchema from "../models/Combo";
import TagSchema from "../models/Tag";
import mongoose from "mongoose";

class DbContext {
  Burgers = mongoose.model("Burger", BurgerSchema);
  Tags = mongoose.model("Tag", TagSchema);
  Sides = mongoose.model("Side", SideSchema);
  Combos = mongoose.model('Combo', ComboSchema)
}

export const dbContext = new DbContext();
