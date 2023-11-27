import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Order } from './order.entity';
ConfigModule.forRoot({
    envFilePath: 'development.env',
});

export const config: TypeOrmModuleOptions = {
    type: 'mysql',
    port: 3306,
    username: "root",
    password: "",
    database: "orderapp",
    host: 'localhost',
    entities: [Order],
    synchronize: true,
    retryAttempts: 100,
    retryDelay: 5000
}