import {DataSourceOptions} from "typeorm";
import {Player} from "@/entity/Player";
import {Team} from "@/entity/Team";

const config: DataSourceOptions = {
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Player, Team],
};

export default config;