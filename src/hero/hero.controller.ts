import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './create-hero.dto';
import { UpdateHeroDto } from './update-hero.dto';
import { Hero } from './hero.model';

@Controller('heroes')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  findAll(@Query('filter') filter: string): Promise<Hero[]> {
    if (filter === 'heroes') {
      return this.heroService.findHeroes();
    } else {
      return this.heroService.findAll();
    }
  }

  @Get(':id')
    async findOne(@Param('id') id: string) {
    const hero = await this.heroService.findOne(id);
    if (!hero) {
        return null; // Você pode definir como lidar com heróis inexistentes
    }

    const age = 29; // Substitua pela idade real do herói
    const equippedWeapons = hero.equippedWeapons.filter((weapon) => weapon.equipped);
    const keyAttribute = hero.keyAttribute;

    const mod = (attrValue: number) => {
        if (attrValue >= 0 && attrValue <= 8) {
        return -2;
        } else if (attrValue >= 9 && attrValue <= 10) {
        return -1;
        } else if (attrValue >= 11 && attrValue <= 12) {
        return 0;
        } else if (attrValue >= 13 && attrValue <= 15) {
        return 1;
        } else if (attrValue >= 16 && attrValue <= 18) {
        return 2;
        } else if (attrValue >= 19 && attrValue <= 20) {
        return 3;
        }
        return 0;
    };

    const attack = 10 + mod(hero[keyAttribute]) + equippedWeapons.reduce((sum, weapon) => sum + weapon.mod, 0);
    const exp = Math.floor((age - 7) * Math.pow(22, 1.45));

    return {
        Nome: hero.name,
        Idade: age,
        Armas: equippedWeapons.length,
        Atributo: keyAttribute,
        Ataque: attack,
        Exp: exp,
    };
  }

  @Post()
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroService.update(id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroService.remove(id);
  }
}
