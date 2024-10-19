import { Pool } from 'pg';
import { IUrlRepository } from '../../domain/repositories/url-repository.interface';
import { UrlEntity } from '../../domain/entities/url.entity';

export class PostgresUrlRepository implements IUrlRepository {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'your_pg_user',
      host: 'localhost',
      database: 'your_database',
      password: 'your_password',
      port: 5432,
    });
  }

  async create(urlEntity: UrlEntity): Promise<void> {
    await this.pool.query(
      'INSERT INTO urls (id, original_url, short_url, createdAt) VALUES ($1, $2, $3, $4)',
      [
        urlEntity.id,
        urlEntity.originalUrl,
        urlEntity.shortUrl,
        urlEntity.createdAt,
      ],
    );
  }

  async findByShortUrl(shortUrl: string): Promise<UrlEntity | null> {
    const result = await this.pool.query(
      'SELECT * FROM urls WHERE short_url = $1',
      [shortUrl],
    );
    if (result.rows.length === 0) {
      return null;
    }
    const row = result.rows[0];
    return new UrlEntity(
      row.id,
      row.original_url,
      row.short_url,
      row.created_at,
    );
  }
}
