import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserRdo } from '@project/rdo';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Information of user by user ID',
    type: UserRdo,
  })
  @Get('/byId/:id')
  public async getUserByUd(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Information of user by user email',
    type: UserRdo,
  })
  @Get('/byEmail/:email')
  public async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update user by id',
    type: UserRdo,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found',
  })
  @Patch('/update/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto
  ) {
    return this.userService.updateUser(id, body);
  }
}
