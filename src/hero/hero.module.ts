import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroSchema } from './hero.schema'; // Importe o esquema corretamente
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }]), // Use 'Hero' como o nome
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}
