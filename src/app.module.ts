import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Se você estiver usando um arquivo de configuração
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'mongo-heroes'}),
    HeroModule,
  ],
})
export class AppModule {}
