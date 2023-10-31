import * as mongoose from 'mongoose';

export const HeroSchema = new mongoose.Schema({
  name: String,
  age: Number,
  equippedWeapons: [
    {
      name: String,
      mod: Number,
      attr: String,
      equipped: Boolean,
    },
  ],
  keyAttribute: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
});
