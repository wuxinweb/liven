import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from '../../schema/user.schema';
import { UsersController } from './users.controller';
import { TagsModule } from '../tags/tags.module';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
