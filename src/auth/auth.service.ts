import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    //TODO: check login & password

    const payload = { username: loginDto.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
