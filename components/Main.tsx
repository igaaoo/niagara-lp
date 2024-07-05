'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';

export function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window != undefined && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="bg-black h-fit drop-shadow-2xl shadow-lg">
      {
        !isMobile ?
          <video autoPlay muted loop className='w-full  object-top'>
            <source src='/niagaraVideo.mp4' type='video/mp4' />
          </video>
          :
          <div className="text-white relative">
            <Image width={750} height={1334} alt="" src='/main1.png' className='w-full object-top blur-sm h-screen object-cover' />
            <div className="absolute items-center flex justify-center flex-col bottom-0 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold px-20">
              <p className="text-4xl font-semibold whitespace-nowrap">Crie Sem Limites</p>
              <p> Soluções avançadas de produção virtual e gráficos em tempo real</p>
              <button className='bg-amber-600 mt-6 w-44 hover:bg-amber-700 text-sm font-semibold font-red-hat p-4 text-white'>
                FALE CONOSCO
              </button>
            </div>
          </div>
      }
    </div>
  );
}