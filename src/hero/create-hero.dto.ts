// create-hero.dto.ts
import { IsString, IsArray, IsInt, Min, IsOptional } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsString()
  birthday: string;

  @IsArray()
  weapons: Array<{
    name: string;
    mod: number;
    attr: string;
    equipped: boolean;
  }>;

  @IsOptional()
  @IsInt()
  @Min(0)
  strength: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  dexterity: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  constitution: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  intelligence: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  wisdom: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  charisma: number;

  @IsOptional()
  @IsString()
  keyAttribute: string;
}
