"use client";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLanguageContext } from "@/context/LanguageContext";


export function Lema() {
  const { language } = useLanguageContext();

  return (
    <div className="flex w-full items-center flex-col md:flex-row text-center shadow-lg p-4 bg-zinc-50   text-black  md:justify-between">

      <div className="flex flex-col text-left md:gap-4 gap-2 py-12  px-4  md:py-10 w-full col-span-4 md:px-20 ">
        <h2 className="md:text-xl text-right font-medium text-orange-600">
          {language === "pt-br" ?
            "TRANSFORME SUAS IDEIAS EM REALIDADE" :
            "TURN YOUR IDEAS INTO REALITY"}
        </h2>
        <p className="md:text-4xl text-xl text-right font-semibold leading-6">
          {language === "pt-br" ?
            "Estúdio especializado em desenvolver projetos 3D ultra realistas no Unreal" :
            "Studio specialized in developing ultra-realistic 3D projects in Unreal"}
        </p>
      </div>


      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[60vh] border-2  md:max-w-[50vw] relative "
      >
        <ResizablePanel defaultSize={75}>
          <Image width={750} height={1334} alt="" src='/render1.png' className='w-full object-top  object-cover h-[60vh] ' />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Image width={750} height={1334} alt="" src='/render2.png' className='w-full object-top object-left  object-cover h-[60vh] ' />
        </ResizablePanel>
        <p className="absolute  bg-black bg-opacity-50 p-2 w-fit font-semibold text-white">
          {language === "pt-br" ? "ARRASTE PARA VER MAIS" : "DRAG TO SEE MORE"}
        </p>
      </ResizablePanelGroup>


    </div>
  );
}