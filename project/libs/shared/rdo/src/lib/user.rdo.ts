import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @Expose()
  @ApiProperty({
    description: 'The unique user ID',
    example: '123',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
  })
  public avatar?: string;

  @Expose()
  @ApiProperty({
    description: 'User first name',
    example: 'Kuz',
  })
  public firstName: string;

  @Expose()
  @ApiProperty({
    description: 'User last name',
    example: 'Mich',
  })
  public lastName: string;

  @Expose()
  @ApiProperty({
    description: 'Unique user email',
    example: 'user@user.ru',
  })
  public email: string;
}
