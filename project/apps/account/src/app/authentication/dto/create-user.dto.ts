import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Unique user email',
    example: 'user@user.ru',
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Kuz',
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Mich',
  })
  public lastName: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
    required: false,
  })
  public avatar?: string;

  @ApiProperty({
    description: 'User password',
    example: '123456',
  })
  public password: string;
}
