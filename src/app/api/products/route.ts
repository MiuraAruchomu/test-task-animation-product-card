import { IProduct } from '@/features/products/products.interface';
import { NextResponse } from 'next/server';

export async function GET() {
  const products: IProduct[] = [
    {
      id: '1',
      title: 'TS x BOXR WHITE TEE',
      price: 4199,
      description: {
        subtitle: 'Футболка из коллаборации Team Spirit x BOXR Movement Club.',
        materials: 'Хлопок 100%/nПлотность текстиля 250г/м²/nПринт шелкография',
      },
    },
    {
      id: '2',
      title: 'THE TEAM TEE',
      price: 4999,
      description: {
        subtitle:
          'Коллекция посвященная победе нашего ростера на Perfect World Shanghai Major 2024.',
        materials: 'Хлопок 100%/nПлотность текстиля 250г/м²',
      },
    },
    {
      id: '3',
      title: 'THE TROPHY TEE',
      price: 4999,
      description: {
        subtitle:
          'Коллекция посвященная победе нашего ростера на Perfect World Shanghai Major 2024.',
        materials: 'Хлопок 100%/nПлотность текстиля 250г/м²',
      },
    },
    {
      id: '4',
      title: 'THE DECIDER HOODIE',
      price: 6999,
      description: {
        subtitle:
          'Коллекция посвященная победе нашего ростера на Perfect World Shanghai Major 2024.',
        materials: 'Хлопок 90%, полиэстер 10%/nПлотность текстиля 350г/м²',
      },
    },
    {
      id: '5',
      title: 'KEY PRO DROP LONG',
      price: 3750,
      description: {
        subtitle: 'Лонгслив из лимитированной коллекции “Key pro drop”.',
        materials:
          'Хлопок 100%/nЛегкий оверсайз, спущенная линия плеча/nПлотность текстиля 200 г/м/nПринт шелкография',
      },
    },
    {
      id: '6',
      title: 'PRO KIT TEE 24-25',
      price: 5499,
      description: {
        subtitle:
          'Легендарная игровая форма чемпионов Perfect World Shanghai Major 2024.',
        materials: 'Хлопок 100%/nПлотность текстиля 250 г/м²/nОверсайз крой',
      },
    },
    {
      id: '7',
      title: 'BLACK TEE',
      price: 4499,
      description: {
        subtitle:
          'Минималистичная коллекция для повседневной жизни. Ничего лишнего, только комфорт.',
        materials:
          'Хлопок 100%/nПлотность текстиля 250 г/м²/nОверсайз крой/nЛого - вышивка',
      },
    },
    {
      id: '8',
      title: 'BLACK TOTE',
      price: 2499,
      description: {
        subtitle:
          'Минималистичная коллекция для повседневной жизни. Ничего лишнего, только комфорт. ',
        materials: 'Хлопок 100%/nПлотность текстиля 240 г/м²/nЛого - вышивка',
      },
    },
  ];

  return NextResponse.json(products);
}
