import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavouritesController } from './favourites.controller';
import { FavouriteMovie } from './favourites.entity';
import { FavouritesService } from './favourites.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavouriteMovie])],
  controllers: [FavouritesController],
  providers: [FavouritesService],
})
export class FavouritesModule {}
