import { Controller, OnModuleInit, Get, Param } from '@nestjs/common';
import {
  GrpcMethod,
  ClientGrpc,
  Client,
  Transport,
} from '@nestjs/microservices';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';
import { Observable } from 'rxjs';
import { join } from 'path';
import { grpcClientOptions } from '../grpc-hero.options';
// import { userInfo } from 'os';

interface HeroService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller()
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroService;

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @GrpcMethod('HeroService', 'FindOne')
  async creatUser() {
    return await this.heroService.findOne({ id: 1 });
  }

  @Get('hero/:id')
  call(@Param() params): Observable<any> {
    return this.heroService.findOne({ id: +params.id });
  }
}
