import { MidwayConfig } from '@midwayjs/core';
import { Map } from '../entity/map.entity';
import { Article } from '../entity/article.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1722137563354_3277',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
  },
  typeorm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Misaka20001',
    database: 'map',
    synchronize: true, // 生产环境中不建议开启
    logging: false,
    dataSource: {
      // 这里可以定义多个数据源
      default: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Misaka20001',
        database: 'map',
        entities: [ Map, Article ],
      },
    },
    entities: [ Map, Article ],
  }
} as MidwayConfig;