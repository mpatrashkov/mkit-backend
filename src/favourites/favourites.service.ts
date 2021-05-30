import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavouriteMovie } from './favourites.entity';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(FavouriteMovie)
    private readonly favouritesRepository: Repository<FavouriteMovie>,
  ) {}

  findAll(uid: string) {
    return this.favouritesRepository.find({
      where: {
        uid,
      },
    });
  }

  findByMovieId(uid: string, movieId: string) {
    return this.favouritesRepository.findOne({
      where: {
        uid,
        movieId,
      },
    });
  }

  async add(uid: string, movieId: string) {
    const exists = await this.favouritesRepository.findOne({
      where: {
        uid,
        movieId,
      },
    });

    if (exists) {
      return null;
    }

    const favouriteMovie = new FavouriteMovie();
    favouriteMovie.uid = uid;
    favouriteMovie.movieId = movieId;

    return this.favouritesRepository.save(favouriteMovie);
  }

  remove(id: string) {
    return this.favouritesRepository.delete(id);
  }
}
