import { dbValidationSchema } from './mongo.validation-schema';
import * as process from 'node:process';
import { DEFAULT_MONGO_PORT } from './mongo.constant';
import { registerAs } from '@nestjs/config';

export interface MongoConfig {
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
  authBase: string;
}

function validateMongoConfig(config: MongoConfig): void {
  const { error } = dbValidationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(`[DB Config Validation Error]: ${error.message}`);
  }
}

function getDbConfig(): MongoConfig {
  const config: MongoConfig = {
    host: process.env.MONGO_HOST!,
    name: process.env.MONGO_DB!,
    port: parseInt(process.env.MONGO_PORT ?? `${DEFAULT_MONGO_PORT}`, 10),
    user: process.env.MONGO_USER!,
    password: process.env.MONGO_PASSWORD!,
    authBase: process.env.MONGO_AUTH_BASE!,
  };

  validateMongoConfig(config);
  return config;
}

export default registerAs('db', getDbConfig);
