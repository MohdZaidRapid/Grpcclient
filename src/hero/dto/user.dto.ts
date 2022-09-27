import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field({ nullable: false, description: 'enter user details' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
