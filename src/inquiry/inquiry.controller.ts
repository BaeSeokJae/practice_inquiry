import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InquiryService } from './inquiry.service';

@ApiTags('Inquiries')
@Controller('api')
export class InquiryController {
  constructor(private inquiriesService: InquiryService) {}

  @ApiOperation({ summary: '내 문의 목록' })
  @Get('inquiries')
  async myInquiry(
    @Query('page') page: number,
    @Query('per_page') per_page: number,
  ) {
    return;
  }
}
