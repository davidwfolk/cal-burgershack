import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Combo = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    burger: { type: ObjectId, ref: "Burger", required: true },
    side: { type: ObjectId, ref: "Side", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Combo;

// /api/universes
// /api/universes/universeId
// universe
// /api/universes/universeId/solarSystems
// /api/universes/universeId/solarSystems/solarSystemsId
//  solarSystem: universeId
// /api/solarSystems/solarSystemsId/stars
//    stars: solarSystemId
// /api/stars/starsId/planets
//      planets: starId
// /api/planets/planetId/moons
//        moons: planetId

