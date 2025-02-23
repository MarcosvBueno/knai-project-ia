import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
            <Image
              src={'/horizontal-logo.png'}
              alt="Logo da Empresa"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </div>
          <nav className="w-full md:w-1/2 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#difference" className="hover:text-gray-800">
                  Our Difference
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-gray-800">
                  How does it work?
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-gray-800">
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-gray-800">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-800">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-800">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-800">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} KNAI Artifical Intelligence. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
