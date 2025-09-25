import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from '@project/helpers';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          userName: config.get<string>('db.user'),
          password: config.get<string>('db.password'),
          databaseName: config.get<string>('db.name'),
          port: config.get<string>('db.port'),
          host: config.get<string>('db.host'),
          authDatabase: config.get<string>('db.authBase'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
