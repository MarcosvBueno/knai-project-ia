import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 ">
      <div className="flex flex-col  md:flex-row justify-between items-center py-10 gap-2 w-full">
        <h1 className="font-mono text-4xl font-bold w-full text-white">
          How does it work?
          <strong className="animate-ping text-cyan-400">_</strong>
        </h1>
        <p className="font-sans text-xl font-bold text-white">
          We have built Proprietary Technology required to run an AI Agent on
          Large Data
        </p>
      </div>
      <Image
        src={'/how-does-it-work.png'}
        alt="how does it works"
        width={1200}
        height={1200}
        className="rounded-xl "
      />
    </div>
  );
}
