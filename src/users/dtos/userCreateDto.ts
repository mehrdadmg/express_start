import { MinLength, IsEmail, MaxLength, IsDefined, IsString } from 'class-validator';

class UserCreateDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsDefined()
  password: string;
}

export default UserCreateDto;
