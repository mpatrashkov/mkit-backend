import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalTokenStrategy } from './local-token.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalTokenStrategy],
})
export class AuthModule {}
