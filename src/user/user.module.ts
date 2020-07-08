import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user-service/user.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { APP_PIPE } from '@nestjs/core';
import { LoginValidationPipe } from 'src/shared/login-validation.pipe';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_PIPE,
      useClass: LoginValidationPipe,
    }
  ]
})
export class UserModule {}
