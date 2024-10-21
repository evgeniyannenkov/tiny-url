import { Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getOriginalUrl() {
    return this.apiService.getOriginalUrl('shortCode');
  }
}
