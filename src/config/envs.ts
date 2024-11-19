import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  HOST_API: string;
}

const envsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    HOST_API: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  hostApi: envVars.HOST_API,
};
