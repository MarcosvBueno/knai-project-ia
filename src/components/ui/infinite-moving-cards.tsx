/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Quote } from 'lucide-react';

export const InfiniteMovingCards = ({
  items,
  direction = 'right',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    imageUrl: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative  w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[450px] max-w-full relative rounded-2xl border flex-shrink-0 border-cyan-700 px-8 py-6 md:w-[550px] h-[280px] md:h-[350px] flex flex-col items-center justify-center"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
            }}
            key={item.name}
          >
            <blockquote className="flex flex-col items-start text-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              <div className="flex justify-center items-start ">
                <span className="text-xs md:text-sm leading-[1.6] text-black font-normal mb-6">
                  <Quote className="h-5 w-5" />
                  {item.quote}
                </span>
              </div>
              {/* Informações do usuário */}
              <div className="flex flex-col items-center justify-center w-full">
                {/* Foto do avatar */}
                <div className="mb-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={item.imageUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {/* Nome e cargo */}
                <span className="text-base leading-[1.6] text-black font-semibold">
                  {item.name}
                </span>

                <span className="text-sm leading-[1.6] text-cyan-400 font-normal">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
