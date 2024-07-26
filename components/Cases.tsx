"use client";

import Image from "next/image";
import { Button } from "./ui/button";

import { useEffect, useState } from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const infoPt = {
  title: "CASES",
  description: "Cases de sucesso",
};

const infoEn = {
  title: "CASES",
  description: "Success cases",
};

const nichesPt = [
  {
    title: "Pacifil",
    description: "Dê vida ao seu conteúdo com estúdios virtuais impressionantes e imersivos",
    bgClass: "bg-carousel-virtual-studios"
  },
  {
    title: "Realidade Virtual",
    description: "Aprimore habilidades em ambientes ultra-realistas",
    bgClass: "bg-solutions-vr"
  },
  {
    title: "Realidade Aumentada",
    description: "Maximize experiências com interações em tempo real",
    bgClass: "bg-solutions-ar"
  },
  {
    title: "Renders",
    description: "Encante com visualizações deslumbrantes de produtos",
    bgClass: "bg-solutions-render"
  },
];

const nichesEn = [
  {
    title: "Virtual Studios",
    description: "Bring your content to life with stunning and immersive virtual studios",
    bgClass: "bg-carousel-virtual-studios"
  },
  {
    title: "Virtual Reality",
    description: "Enhance skills in ultra-realistic environments",
    bgClass: "bg-solutions-vr"
  },
  {
    title: "Augmented Reality",
    description: "Maximize experiences with real-time interactions",
    bgClass: "bg-solutions-ar"
  },
  {
    title: "Renders",
    description: "Delight with stunning product visualizations",
    bgClass: "bg-solutions-render"
  }
];


export function Cases() {
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useLanguageContext();


  const info = language === "en-us" ? infoEn : infoPt;

  const [video, setVideo] = useState(0);

  return (
    <div
      className="flex flex-col w-full items-center py-4 md:py-10 justify-center bg-zinc-50 "
      id="cases"
    >
      <div className="p-8 md:p-4 md:mb-10 text-black">
        <p className=" text-lg font-bold font-medium px-8 w-full  text-center text-orange-600">
          {info.title}
        </p>
        <span className="md:text-5xl font-bold  text-2xl">
          {info.description}
        </span>
      </div>


      <section className="flex flex-col gap-4">

        <video autoPlay muted loop className='w-full object-top'>
          {
            video === 0 && (
              <source src="/videos/pacifil.mp4" type="video/mp4" />
            )
          }
          {
            video === 1 && (
              <source src="/videos/comil.mp4" type="video/mp4" />
            )
          }
          {
            video === 2 && (
              <source src="/videos/page.mp4" type="video/mp4" />
            )
          }
        </video>


        <div className="grid grid-cols-3 gap-4">
          <Button className="w-full h-20 bg-zinc-200 border-b-4 border-b-orange-600"
            onClick={() => setVideo(0)}
          >
            <Image src="clients/pacifil.png" alt="Pacifil" width={140} height={100} />
          </Button>

          <Button className="w-full h-20 bg-primary border-b-4 border-b-orange-600"
            onClick={() => setVideo(1)}
          >
            <Image src="clients/comil.png" alt="Comil" width={140} height={100} />
          </Button>

          <Button className="w-full h-20 bg-blue-500 border-b-4 border-b-orange-600"
            onClick={() => setVideo(2)}
          >
            <Image src="clients/page.png" alt="Pagé" width={140} height={100} />
          </Button>
        </div>

      </section>




    </div>
  );
}
