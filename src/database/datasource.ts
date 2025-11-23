import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "clinicapp",
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "clinicapp_migrations",
  entities: ["src/**/*.entity.ts"],
});
