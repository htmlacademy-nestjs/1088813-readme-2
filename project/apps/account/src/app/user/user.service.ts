import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserErrorMessages } from '@project/enums';
import { UpdateUserDto } from './dto/update-user.dto';
import { fillDto } from '@project/helpers';
import { UserRdo } from '@project/rdo';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUserById(id: string) {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND);
    }

    return fillDto(UserRdo, existUser.toPOJO());
  }

  public async getUserByEmail(email: string) {
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND);
    }

    return fillDto(UserRdo, existUser.toPOJO());
  }

  public async updateUser(id: string, dto: UpdateUserDto) {
    const existUser = await this.userRepository.findById(id);

    if (!existUser) {
      throw new NotFoundException(UserErrorMessages.USER_NOT_FOUND);
    }

    const updatedUser = await this.userRepository.update(
      id,
      Object.assign(existUser, { ...dto })
    );

    return fillDto(UserRdo, updatedUser.toPOJO());
  }
}
