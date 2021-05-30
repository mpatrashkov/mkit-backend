import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalTokenAuthGuard } from 'src/auth/local-token-auth.guard';
import { FavouritesService } from './favourites.service';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @UseGuards(LocalTokenAuthGuard)
  @Get()
  getAll(@Request() req) {
    return this.favouritesService.findAll(req.user.id);
  }

  @UseGuards(LocalTokenAuthGuard)
  @Get('movie/:id')
  getByMovieId(@Request() req, @Param('id') id: string) {
    return this.favouritesService.findByMovieId(req.user.id, id);
  }

  @UseGuards(LocalTokenAuthGuard)
  @Post()
  add(@Request() req, @Body('movieId') movieId: string) {
    return this.favouritesService.add(req.user.id, movieId);
  }

  @UseGuards(LocalTokenAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favouritesService.remove(id);
  }
}
