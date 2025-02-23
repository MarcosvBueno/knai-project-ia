'use client';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function CommentsSection() {
  const items = [
    {
      quote:
        ' This tool will revolutionize how companies view and handle their data!! A true AI revolution.',
      name: 'ivisson Alves',
      title: 'AI Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/81643916?v=4',
    },
    {
      quote:
        "KNAI is a game-changer. It's not just about querying data; it's about transforming how we think and act on insights, all in real time.",
      name: 'Giulia Buonafina',
      title: 'AI Engineer',
      imageUrl: 'https://avatars.githubusercontent.com/u/132923446?v=4',
    },
    {
      quote:
        "With KNAI, we've built a solution that seamlessly integrates AI into everyday workflows, making data analysis feel like a natural conversation.",
      name: 'Marcos Bueno',
      title: 'Full-stack Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/104960654?v=4',
    },
    {
      quote:
        'It was amazing to see KNAI take shape. The project brought many challenges, but every step was rewarded by the ability to transform complex data into accessible insights.',
      name: 'Hugo Andrade Lima',
      title: 'Graphic Designer',
      imageUrl: 'https://avatars.githubusercontent.com/u/127315064?v=4',
    },
    {
      quote:
        'Building KNAI was an exciting challenge in AI research. Developing a system that understands and responds to complex data queries in a natural way pushes the boundaries of what’s possible with AI.',
      name: 'Daniela Menezes',
      title: 'AI Researcher',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4E35AQF_hExre9BqKA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738432867196?e=1740880800&v=beta&t=6RDqUy0cf21gxigJFj0DQZ1nlkTYmOdBnXXOWapLbao',
    },
  ];
  return (
    <div className="w-full max-w-8xl mx-auto p-4 ">
      <div className="flex flex-col justify-center items-center py-10 gap-2 w-full">
        <h1 className="font-mono text-4xl font-bold text-center md:text-5l">
          Reviews: Developers Love Building KNAI
          <strong className="animate-ping text-cyan-400">_</strong>
        </h1>
        <p className="font-sans text-lg md:text-xl font-base text-gray-500 max-w-5xl text-center">
          From concept to creation, hear how our team’s passion for innovation
          shaped KNAI into a game-changing AI solution that transforms how
          businesses interact with their data
        </p>
      </div>
      <div className="max-w-8xl">
        <InfiniteMovingCards items={items} />
      </div>
    </div>
  );
}
