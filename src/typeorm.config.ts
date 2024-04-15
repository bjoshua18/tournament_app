import {DataSourceOptions} from "typeorm";
import {Player} from "@/entity/Player";
import {Team} from "@/entity/Team";

const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  logging: true,
  entities: [Player, Team],
  synchronize: true
};

export default config;