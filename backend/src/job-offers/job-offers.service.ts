import { Injectable } from '@nestjs/common';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobOffersService {
  constructor(private prisma: PrismaService) {}
  create(createJobOfferDto: CreateJobOfferDto) {
    return 'This action adds a new jobOffer';
  }

  findAll() {
    return this.prisma.offer.findMany();
  }

  findOne(id: string) {
    return this.prisma.offer.findUnique({ where: { id } });

  }

  update(id: number, updateJobOfferDto: UpdateJobOfferDto) {
    return `This action updates a #${id} jobOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobOffer`;
  }
}
