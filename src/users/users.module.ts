import { Profile } from './../typeorm/entities/profile';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './service/user/user.service';
import { ExampleMiddleware } from './middlewares/example.middleware';
import { AnotherMiddleware } from './middlewares/another.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Post } from 'src/typeorm/entities/post';
import { Address } from '../typeorm/entities/address';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Post, Address])],
  controllers: [UserController],
  providers: [UserService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('user')
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'user',
      method: RequestMethod.GET
    }).apply(AnotherMiddleware).forRoutes({ path: 'user', method: RequestMethod.POST })
  }
}
