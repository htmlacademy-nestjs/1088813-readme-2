import { Document } from 'mongoose';
import { AuthUser } from '@project/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'accounts',
  timestamps: {
    createdAt: 'registerDate',
  },
})
export class UserModel extends Document implements AuthUser {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstName: string;

  @Prop({
    required: true,
  })
  public lastName: string;

  @Prop({
    required: true,
  })
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
