// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash('mariem', salt);
  const user = await prisma.user.create({
    data: {
      name: 'mariem',
      age: 16,
      email: 'marsfec@gmail.com',
      password: hashPassword,
      role: 'Admin',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Khalil',
      age: 25,
      email: 'khalil@gmail.com',
      password: hashPassword,
      role: 'Employe',
    },
  });

  const type = ["offre d'emploi", 'offre de stage'];
  const title = [
    'Téléconseiller',
    'Assistante Administrative et Commerciale',
    'Chargé Clientèle Francophone',
    'Femmes de Ménage',
    'Agent Commercial / Livreur',
    'Chauffeur',
    'Secrétaire Retraitée',
    'Assistante de Direction',
    'Téléconseiller Juridique',
  ];
  const allSkills = [
    // Technical Skills
    'Programming (Python, Java, C++)',
    'Web Development (HTML, CSS, JavaScript)',
    'Database Management (SQL, NoSQL)',
    'Machine Learning and Data Science',
    'Network Administration',
    'Cybersecurity',
    'Mobile App Development (iOS, Android)',
    'Cloud Computing (AWS, Azure, Google Cloud)',
    'DevOps (CI/CD, Docker, Kubernetes)',
    'UI/UX Design',
    'AR/VR Development',
    'Blockchain Development',

    // Creative Skills
    'Graphic Design (Adobe Photoshop, Illustrator)',
    'Video Editing (Adobe Premiere Pro, Final Cut Pro)',
    'Music Production (FL Studio, Ableton Live)',
    'Writing (Creative Writing, Copywriting)',
    'Photography',
    'Game Design',

    // Communication Skills
    'Public Speaking',
    'Writing (Business Communication, Technical Writing)',
    'Negotiation',
    'Conflict Resolution',
    'Active Listening',
    'Presentation Skills',

    // Analytical Skills
    'Data Analysis',
    'Statistical Modeling',
    'Critical Thinking',
    'Problem-Solving',
    'Research Skills',
    'Financial Analysis',

    // Soft Skills
    'Leadership',
    'Time Management',
    'Teamwork',
    'Adaptability',
    'Emotional Intelligence',
    'Decision Making',

    // Languages
    'English (or any other language)',
    'Foreign Language Proficiency (Spanish, French, Mandarin, etc.)',

    // Health and Fitness
    'Personal Training',
    'Yoga or Pilates Instruction',
    'Nutrition Counseling',
    'Physical Therapy',
    'Wellness Coaching',

    // Handiwork and Crafts
    'Woodworking',
    'Sewing or Knitting',
    'Pottery',
    'Painting or Drawing',
    'Carpentry',

    // Marketing and Sales
    'Digital Marketing (SEO, SEM, Social Media)',
    'Content Marketing',
    'Sales Strategy and Negotiation',
    'Market Research',
    'Customer Relationship Management (CRM)',
    'Brand Management',

    // Business and Management
    'Project Management',
    'Strategic Planning',
    'Financial Management',
    'Business Development',
    'Human Resources Management',
    'Risk Management',

    // Education and Training
    'Online Teaching and Instruction',
    'Curriculum Development',
    'E-Learning Development',
    'Training and Development',
    'Educational Technology',
    'Instructional Design',

    // Science and Engineering
    'Biotechnology',
    'Environmental Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
  ];
  // execute the main function
  for (let i = 0; i < 10; i++) {
    await prisma.offer.create({
      data: {
        title: title[Math.floor(Math.random() * 9)],
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        type: type[Math.floor(Math.random() * 2)],
        offerSkills: {
          create: [
            {
              Skills: {
                create: { name: allSkills[Math.floor(Math.random()*72)] },
              }
            },
            {
              Skills: { create: { name: allSkills[Math.floor(Math.random()*72)] } },
            },
            {
              Skills: { create: { name: allSkills[Math.floor(Math.random()*72)] } },
            },
          ],
        },
      },
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
