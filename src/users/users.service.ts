import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnonymousUser } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(AnonymousUser)
    private readonly usersRepository: Repository<AnonymousUser>,
  ) {}

  create() {
    const user = new AnonymousUser();

    return this.usersRepository.save(user);
  }

  async findOne(uid: string) {
    try {
      return await this.usersRepository.findOne(uid);
    } catch {
      return null;
    }
  }
}
