import { Injectable } from '@nestjs/common';
import { AnonymousUser } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  validateUser(uid: string) {
    return this.usersService.findOne(uid);
  }
}
