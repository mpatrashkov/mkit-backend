import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FavouritesModule } from './favourites/favourites.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, FavouritesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
