import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('/signin')
	authenticate(@Body() signinDto: SigninDto) {
		return this.authService.signin(signinDto);
	}

	@Post('/signup')
	create(@Body() signUpDto: SignUpDto) {
		return this.authService.signup(signUpDto);
	}
}
