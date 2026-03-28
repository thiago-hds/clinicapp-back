import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ClientsModule } from "./clients/clients.module";
import { AddressesModule } from "./addresses/addresses.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CommonModule } from "./common/common.module";
import { AuthModule } from "./auth/auth.module";
import configuration from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres" as const,
        host: configService.get<string>("database.host", { infer: true }),
        port: configService.get<number>("database.port", { infer: true }) as number,
        username: configService.get<string>("database.username", { infer: true }),
        password: configService.get<string>("database.password", { infer: true }),
        database: configService.get<string>("database.name", { infer: true }),
        autoLoadEntities: true,
        migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
        migrationsTableName: "clinicapp_migrations",
        synchronize: true,
      }),
    }),
    UsersModule,
    ClientsModule,
    AddressesModule,
    CommonModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
