"use client";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLanguageContext } from "@/context/LanguageContext";


export function VirtualADs() {
  const { language } = useLanguageContext();

  return (
    <div className="flex w-full items-center flex-col md:flex-row text-center shadow-lg p-4 bg-zinc-50   text-black  md:justify-between">


      <Image width={750} height={1334} alt="" src='/virtualad.jpg' className='w-full object-top  border-2 object-cover h-[60vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20)]' />


      <div className="flex flex-col text-left md:gap-4 gap-2 py-12  px-4  md:py-10 w-full col-span-4 md:px-20 ">
        <h2 className="md:text-xl font-medium text-orange-600">
          {language === "pt-br" ?
            "INOVAR SUA PUBLICIDADE" :
            "INOVATE YOUR ADVERTISING"}
        </h2>
        <p className="md:text-4xl text-xl font-semibold leading-6">
          {language === "pt-br" ?
            "Empresa pioneira em publicidade imersiva e interativa em realidade virtual" :
            "Pioneering company in immersive and interactive advertising in virtual reality"}
        </p>
      </div>





    </div>
  );
}