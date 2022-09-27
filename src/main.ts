import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { grpcClientOptions } from './grpc.options';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice(grpcClientOptions);
  // await app.startAllMicroservices();

  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcClientOptions,
  );
  // console.log(join(__dirname, '../../hero/hero.proto');
  await app.listen();
  // app.connectMicroservice(grpcClientOptions);
  // await app.startAllMicroservicesAsync();
}

bootstrap();
