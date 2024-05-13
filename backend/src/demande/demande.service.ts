import { Injectable } from '@nestjs/common';
import { CreateDemandeDto, UpdateScoreDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Demande } from './entities/demande.entity';

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

  async update(id: string, dto: UpdateScoreDto) {
    const {score}=dto
    const response = await this.prisma.demande.update({
      where: { id },
      data: {score},
    });
    console.log(response,"reponse score");
    
    return response
  }

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
