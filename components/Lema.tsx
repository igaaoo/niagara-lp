import Image from "next/image";

export function Lema() {
  return (
    <div className="flex flex-col w-full items-center text-center md:text-left md:grid md:grid-cols-7 shadow-lg bg-dark-1 text-white md:justify-between">

      <div className="flex flex-col gap-4 py-12 px-4 md:py-0 w-full col-span-4 md:px-20">
        <h2 className="md:text-2xl font-bold">
          TRANSFORME SUAS IDEIAS EM REALIDADE
        </h2>
        <p className="text-2xl">
          ESTÚDIO ESPECIALIZADO EM DESENVOLVER
          PROJETOS 3D ULTRA REALISTA EM UNREAL
        </p>
      </div>

      <Image width={750} height={1334} alt="" src='/main1.jpg' className='w-full object-top  h-96 col-span-3' />
    </div>
  );
}