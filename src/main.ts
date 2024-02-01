import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
