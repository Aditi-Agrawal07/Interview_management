import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsEnum, IsNotEmpty, IsString, ArrayNotEmpty, MinLength } from 'class-validator';

export enum StudentStatus {
    LEVEL_1A = 'Level 1A',
    LEVEL_1B = 'Level 1B',
    LEVEL_1C = 'Level 1C',
    LEVEL_2A = 'Level 2A',
    LEVEL_2B = 'Level 2B',
    LEVEL_2C = 'Level 2C',
    LEVEL_3A = 'Level 3A',
    LEVEL_3B = 'Level 3B',
    LEVEL_3C = 'Level 3C',
  }

@Schema()
export class Student extends Document {
  @Prop({ required: true, minlength: 3, maxlength: 50 })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
  
  @Prop({ required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({ required: true, minlength: 2, maxlength: 30 })
  @IsNotEmpty()
  @IsString()
  class: string;

  @Prop({ type: [String], enum: StudentStatus, required: true })
  @ArrayNotEmpty()
  @IsEnum(StudentStatus, { each: true })
  status: StudentStatus[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);


