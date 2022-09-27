import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  console.log('PATH', join(__dirname + '/../src', './_proto/hero.proto'));
  const app = await NestFactory.create(AppModule);
  app.listen(8687);
}
bootstrap();
