import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    title: 'User first name',
    example: 'Kuz',
  })
  firstName?: string;

  @ApiProperty({
    required: false,
    title: 'User last name',
    example: 'Mich',
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    title: 'User avatar path',
    example: '/images/user.png',
  })
  avatar?: string;

  @ApiProperty({
    required: false,
    title: 'User email',
    example: 'kuzMich@mail.com',
  })
  email?: string;
}
