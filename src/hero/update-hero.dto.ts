// update-hero.dto.ts
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateHeroDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WeaponDto)
  weapons: WeaponDto[];

  @IsString()
  keyAttribute: string;
}

export class WeaponDto {
  @IsString()
  name: string;

  @IsString()
  attr: string;

  @IsString()
  mod: string;

  equipped: boolean;
}
