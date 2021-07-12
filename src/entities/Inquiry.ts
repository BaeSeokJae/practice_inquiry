import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inquiries', { schema: 'public' })
export class Inquiry {
  @ApiProperty({
    example: 'c119b8a7-8231-42f5-823a-8b6d904ccbf9',
    description: '게시글 id',
  })
  @PrimaryColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'c119b8a7-8231-42f5-823a-8b6d904ccbf9',
    description: '문의글 id',
  })
  @Column()
  parent_id: string;

  @ApiProperty({
    example: '결제 및 환불',
    description: '문의 유형',
  })
  @Column()
  type: string;

  @ApiProperty({
    example: '문의 드립니다',
    description: '제목',
  })
  @Column()
  title: string;

  @ApiProperty({
    example: '환불 부탁드립니다',
    description: '내용',
  })
  @Column()
  body: string;

  @ApiProperty({
    example: 'image.jpeg',
    description: '첨부 파일',
  })
  @Column()
  attached_file: string;

  @ApiProperty({
    example: '1',
    description: '유저 id',
  })
  @Column()
  owner_user_id: string;

  @ApiProperty({
    example: '홍길동',
    description: '유저 닉네임',
  })
  @Column()
  owner_user_dp_name: string;

  @ApiProperty({
    example: '2021-06-28 19:15:19',
    description: '생성 시간',
  })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({
    example: '2021-06-28 19:15:19',
    description: '수정 시간',
  })
  @UpdateDateColumn()
  updated_at: Date;
}
