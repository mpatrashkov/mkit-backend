import { Strategy } from 'passport-local-token';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AnonymousUser } from 'src/users/users.entity';

@Injectable()
export class LocalTokenStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      tokenField: 'uid',
    });
  }

  async validate(uid: string): Promise<AnonymousUser> {
    const user = await this.authService.validateUser(uid);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
