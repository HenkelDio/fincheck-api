import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/shared/config/env';
import { AuthGuard } from './auth.guard';

@Module({
	controllers: [AuthController],
	providers: [AuthService, AuthGuard],
	imports: [
		JwtModule.register({
			secret: env.jwtSecret,
			signOptions: { expiresIn: '7d' },
		}),
	],
})
export class AuthModule {}
