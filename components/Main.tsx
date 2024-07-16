'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useLanguageContext } from "@/context/LanguageContext";
import { ChevronDownCircle, ChevronsDown } from "lucide-react";

export function Main() {
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useLanguageContext();

  useEffect(() => {
    if (window != undefined && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="bg-black h-fit drop-shadow-2xl shadow-lg">
      {
        !isMobile ?
          <video autoPlay muted loop className='w-full object-top'>
            <source src='/videoMain.mov' type='video/mp4' />
          </video>
          :
          <div className="text-white relative">
            <Image width={750} height={1334} alt="" src='/main1.jpg' className='w-full object-top blur-sm h-screen object-cover' />
            <div className="absolute items-center flex justify-center flex-col bottom-0 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-center text-xl font-semibold px-4">

              <p className="text-6xl font-josefin mb-24 shadow-lg bg-orange-700 bg-opacity-50 p-10 pb-6">
                NIAGARA STUDIOS
              </p>

              <p className="text-xl font-semibold whitespace-nowrap">
                {language === "pt-br" ?
                  "CRIE SEM LIMITES" :
                  "CREATE WITHOUT LIMITS"}
              </p>
              <p className="text-4xl font-bold">
                {language === "pt-br" ?
                  "Soluções avançadas de produção virtual e gráficos em tempo real" :
                  "Advanced solutions for virtual production and real-time graphics"}
              </p>
              <button className='bg-orange-600 mt-6 w-44 hover:bg-amber-700 text-sm font-semibold  p-4 text-white'>
                {language === "pt-br" ?
                  "SAIBA MAIS" :
                  "DISCOVER MORE"
                }
              </button>

            </div>
          </div>
      }
      <ChevronsDown className='size-14 rounded-full border border-2 p-2 text-white mt-4 absolute bottom-20 md:bottom-60 left-0 right-0 mx-auto animate-up-and-down' />

    </div>
  );
}