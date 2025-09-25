import * as Joi from 'joi';
import { DEFAULT_PORT, ENVIRONMENTS } from './app-config.constant';

export const validationSchema = Joi.object({
  environment: Joi.string()
    .valid(...ENVIRONMENTS)
    .required(),
  port: Joi.number().port().default(DEFAULT_PORT),
});
