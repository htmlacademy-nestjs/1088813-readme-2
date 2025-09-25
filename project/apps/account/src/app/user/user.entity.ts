import { AuthUser } from '@project/types';
import { Entity } from '@project/core';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public avatar?: string;
  public passwordHash: string;
  public registerDate?: Date;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      registerDate: this.registerDate,
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
    this.passwordHash = data.passwordHash;
    this.registerDate = data.registerDate;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: AuthUser): UserEntity {
    return new UserEntity(data);
  }
}
