import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user-service/user.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
