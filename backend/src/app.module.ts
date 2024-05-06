import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, JobOffersModule, AuthModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
