import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { createReadStream } from 'fs';
import { extname } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import * as pdfParse from 'pdf-parse';
import { PrismaService } from 'src/prisma/prisma.service';
const pipelineAsync = promisify(pipeline);
@Injectable()
export class CvService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCvDto: CreateCvDto) {
    return 'This action adds a new cv';
  }

  
 
  async calculateMatchScore(cvText: string, offerId: string): Promise<number> {
    // Fetch the offer details with related skills from the database
    const offer = await this.prisma.offer.findUnique({
      where: { id: offerId },
      include: {
        offerSkills: {
          include: {
            Skills: true,
          },
        },
      },
    });
    
    if (!offer) {
      throw new Error('Offer not found');
    }

    // Extract words from the offer description and related skills
    const descriptionWords = this.extractWordsFromText(offer.description);
    const skillsWords = offer.offerSkills.map((offerSkill) => offerSkill.Skills.name);

    // Count the number of common words between description and skills
    const commonWordsCount = this.countCommonWords(descriptionWords, skillsWords, cvText);

    return commonWordsCount;
  }

  private extractWordsFromText(text: string): string[] {
    
    return text
      .toLowerCase() 
      .match(/\b\w+\b/g) || [];
  }

  private countCommonWords(words1: string[], words2: string[], cvText: string): number {
   
    const cvWords = this.extractWordsFromText(cvText.toLowerCase()); // Convert to lowercase for case-insensitive comparison 
    const commonWords = cvWords.filter(word => words1.includes(word) || words2.includes(word));
    console.log(commonWords,"common words");
    
    return commonWords.length;

  }


  findAll() {
    return `This action returns all cv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
