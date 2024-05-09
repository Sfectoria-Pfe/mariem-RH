import { Injectable } from '@nestjs/common';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DemandeService {
  constructor(private prisma: PrismaService) {}

  create(createDemandeDto: CreateDemandeDto) {
    const { offerId, ...rest } = createDemandeDto;
    return this.prisma.demande.create({ data: createDemandeDto });
  }

  findAll() {
    return `This action returns all demande`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demande`;
  }

  update(id: number, updateDemandeDto: UpdateDemandeDto) {
    return `This action updates a #${id} demande`;
  }

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
