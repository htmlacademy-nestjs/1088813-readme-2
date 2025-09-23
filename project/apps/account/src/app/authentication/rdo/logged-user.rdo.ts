import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @Expose()
  @ApiProperty({
    description: 'The unique user ID',
    example: '123',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'User email',
    example: 'user@user.ru',
  })
  public email: string;

  @Expose()
  @ApiProperty({
    description: 'Access Token',
    example: 'user@user.ru',
  })
  public accessToken: string;
}
