export class UrlEntity {
  constructor(
    public readonly id: string,
    public readonly originalUrl: string,
    public readonly shortUrl: string,
    public readonly createdAt: Date,
  ) {}
}
