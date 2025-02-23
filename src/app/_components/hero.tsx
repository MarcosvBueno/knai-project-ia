'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="mx-auto max-w-4xl text-center h-scren ">
      <div className="absolute  bottom-[-50px] left-[-150px] 2xl:bottom-[-170px] 2xl:left-[-200px] lg:bottom-[-300px] lg:left-[-300px] w-[300px] h-[300px]  lg:w-[600px] lg:h-[600px] rounded-full outline outline-[100px] outline-cyan-400 bg-white z-1 opacity-30" />
      <div className="absolute top-[-50px] right-[-150px] 2xl:top-[-170px] 2xl:right-[-200px] lg:top-[-300px] lg:right-[-300px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full outline outline-[100px] outline-cyan-400 bg-white z-1 opacity-30" />
      <h1 className="mb-6 font-mono text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl z-10">
        Unleashing the Power of{' '}
        <strong className="text-cyan-400">Conversational AI</strong> for
        Intelligent Analysis
      </h1>
      <p className="mb-8 text-lg text-gray-400 md:text-xl font-sans z-10">
        Transforming data into actionable insights. Real-time analytics.
        Seamless conversations. Experience the next-generation solution with
        KNAI — your intelligent assistant for smarter business decisions.
      </p>
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700"
      >
        Schedule a Demo
      </Link>
    </div>
  );
}
