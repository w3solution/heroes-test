// hero.service.ts
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  constructor(@InjectModel('Hero') private heroModel: Model<Hero>) {}

  async findAll() {
    return this.heroModel.find().exec();
  }

  async findHeroes() {
    return this.heroModel.find({ isHero: true }).exec();
  }

  async findOne(id: string) {
    return this.heroModel.findById(id).exec();
  }

  async create(createHeroDto: CreateHeroDto) {
    const createdHero = new this.heroModel(createHeroDto);
    return createdHero.save();
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    return this.heroModel.findByIdAndUpdate(id, updateHeroDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.heroModel.findByIdAndRemove(id).exec();
  }
}
