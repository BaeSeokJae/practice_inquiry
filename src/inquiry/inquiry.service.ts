import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inquiry } from 'src/entities/Inquiry';
import { Paging } from 'src/utils/paging.util';
import { Repository } from 'typeorm';

@Injectable()
export class InquiryService {
  constructor(
    @InjectRepository(Inquiry) private inquiriesRepository: Repository<Inquiry>,
  ) {}

  async myInquiry(page: number, per_page: number) {
    const totalInquiry = await this.inquiriesRepository
      .findAndCount()
      .then((data) => {
        return data[1];
      });

    const { totalPage, offset } = Paging(page, totalInquiry, per_page);
  }
}
