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
    }
  ],
  keyAttribute: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  attributes: { // Adicione o campo 'attributes' ao modelo
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
  },
});

export interface Hero extends mongoose.Document {
  name: string;
  age: number;
  equippedWeapons: {
    name: string;
    mod: number;
    attr: string;
    equipped: boolean;
  }[];
  keyAttribute: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  attributes: { // Adicione o campo 'attributes' à interface
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
}

export const HeroModel = mongoose.model<Hero>('Hero', HeroSchema);
