import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'Unique user email',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;
}
