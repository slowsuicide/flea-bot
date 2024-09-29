import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
