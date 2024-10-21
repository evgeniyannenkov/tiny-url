import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { ApiModule } from './api.module';
import { MikroORM, RequestContext } from '@mikro-orm/core';
import { ConnectionDetails, getDbConnection } from '@app/testing';

describe('ApiService', () => {
  let service: ApiService;
  let connection: ConnectionDetails;
  let orm: MikroORM;

  beforeAll(async () => {
    connection = await getDbConnection();
    console.log('connection', connection);
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    service = module.get<ApiService>(ApiService);
    orm = module.get(MikroORM);
    RequestContext.create(orm.em, () => {});
  });

  afterEach(() => orm.close());

  it('should be defined', () => {
    console.log('service', service);
    expect(service).toBeDefined();
  });

  describe('createShortUrl', () => {
    it('should create a short URL', async () => {
      const originalUrl = 'https://example.com';
      const shortUrl = 'https://short.url/abc123';

      const result = await service.createShortUrl(originalUrl);

      console.log('result', result);
      expect(result).toBe(shortUrl);
    });
  });
});
