import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'User',
      schema: UserSchema
    }]),
  ],
  providers: [UserService, JwtService],
  controllers: [UserController],
})
export class UserModule {}
