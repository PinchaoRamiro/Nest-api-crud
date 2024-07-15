import { IsString, IsNotEmpty, IsEnum, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  duration: number;

  @IsEnum(['pending', 'inProgress', 'done'])
  status: string;
}
