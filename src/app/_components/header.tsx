'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#', label: 'Home' },
    { href: '#difference', label: 'Our Difference' },
    { href: '#work', label: 'How does it work?' },
    { href: '#reviews', label: 'Reviews' },
  ];

  return (
    <header className="py-2 px-2 fixed w-full z-10">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 bg-black rounded-xl z-10">
        <div className="flex items-center space-x-2 text-xl font-bold font-mono">
          <div className="bg-white p-3 md:p-4 rounded-2xl shadow-md">
            <Image
              src={'/logo-black.png'}
              height={23}
              width={23}
              alt="logo"
              className=""
              suppressHydrationWarning
            />
          </div>
          <span className="text-white text-2xl md:text-4xl font-mono font-light">
            KNAI
          </span>
        </div>
        <nav className="hidden space-x-8 md:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-cyan-500"
          >
            Schedule a demo
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex justify-center items-center">
                <Image
                  src={'/logo-black.png'}
                  alt="horizontal logo black"
                  width={50}
                  height={50}
                  className=""
                />
              </SheetTitle>
              <SheetDescription>
                <h1 className="text-center mt-4 text-black">
                  The <span className="text-cyan-500">highest</span> evolution
                  of conversational AI analysts
                  <strong className="animate-ping">_</strong>
                </h1>
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-black text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-gray-700 hover:text-black text-lg"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 text-center"
                onClick={() => setIsOpen(false)}
              >
                Schedule a demo
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
