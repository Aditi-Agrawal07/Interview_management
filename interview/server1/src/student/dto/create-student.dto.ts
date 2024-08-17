import { IsEmail, IsNotEmpty, IsString, ArrayNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  class: string;

  @ArrayNotEmpty()
  @IsString({ each: true })
  status: string[];
}
