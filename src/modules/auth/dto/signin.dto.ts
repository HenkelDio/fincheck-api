import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'não pode ser vazio' })
	@MinLength(8)
	password: string;
}
