import * as Joi from 'joi';
import { DEFAULT_MONGO_PORT } from './mongo.constant';

export const dbValidationSchema = Joi.object({
  host: Joi.string().hostname().required(),
  port: Joi.number().port().default(DEFAULT_MONGO_PORT),
  name: Joi.string().required(),
  user: Joi.string().required(),
  password: Joi.string().required(),
  authBase: Joi.string().required(),
});
