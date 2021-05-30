import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AnonymousUser } from './users.entity';
import { UsersService } from './users.service';
import { LocalTokenAuthGuard } from 'src/auth/local-token-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(LocalTokenAuthGuard)
  @Get()
  async test(@Request() req) {
    return req.user;
  }

  @Post()
  createUser(): Promise<AnonymousUser> {
    return this.usersService.create();
  }
}
