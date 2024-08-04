"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const infoPt = {
  title: "SOLUÇÕES",
  description: "Onde o real se encontra com o virtual",
};

const infoEn = {
  title: "SOLUTIONS",
  description: "Where the real meets the virtual",
};

const nichesPt = [
  {
    title: "Estúdios Virtuais",
    description: "Dê vida ao seu conteúdo com estúdios virtuais impressionantes e imersivos",
    bgClass: "bg-carousel-virtual-studios",
    href: '/solutions/virtual-studios'
  },
  {
    title: "Realidade Virtual",
    description: "Aprimore habilidades em ambientes ultra-realistas",
    bgClass: "bg-solutions-vr",
    href: '/solutions/vr'
  },
  {
    title: "Realidade Aumentada",
    description: "Maximize experiências com interações em tempo real",
    bgClass: "bg-solutions-ar",
    href: '/solutions/ar'
  },
  {
    title: "Renders",
    description: "Encante com visualizações deslumbrantes de produtos",
    bgClass: "bg-solutions-render",
    href: '/solutions/renders'
  },
];

const nichesEn = [
  {
    title: "Virtual Studios",
    description: "Bring your content to life with stunning and immersive virtual studios",
    bgClass: "bg-carousel-virtual-studios",
    href: '/solutions/virtual-studios'
  },
  {
    title: "Virtual Reality",
    description: "Enhance skills in ultra-realistic environments",
    bgClass: "bg-solutions-vr",
    href: '/solutions/vr'

  },
  {
    title: "Augmented Reality",
    description: "Maximize experiences with real-time interactions",
    bgClass: "bg-solutions-ar",
    href: '/solutions/ar'
  },
  {
    title: "Renders",
    description: "Delight with stunning product visualizations",
    bgClass: "bg-solutions-render",
    href: '/solutions/renders'
  }
];


export function Solutions() {
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useLanguageContext();

  const niches = language === "en-us" ? nichesEn : nichesPt;
  const info = language === "en-us" ? infoEn : infoPt;

  useEffect(() => {
    if (window != undefined && window.innerWidth < 800) {
      setIsMobile(true);
    }
  }, []);


  return (
    <div
      className="flex flex-col w-full items-center md:py-10 py-4 justify-center  bg-zinc-50 "
      id="solutions"
    >
      <div className="p-8 md:p-4 md:mb-10 text-black text-center">
        <p className=" text-lg  font-medium px-8 w-full  text-center text-orange-600">
          {info.title}
        </p>
        <span className="md:text-5xl font-bold  text-xl text-center">
          {info.description}
        </span>
      </div>

      {
        !isMobile ?
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-[80%] min-h-[600px] h-full w-full bg-white shadow-lg border-2"
          >
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="horizontal">
                <Card className={`rounded-none ${niches[0].bgClass} bg-cover border-0 shadow bg-center h-full`}>
                  <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                    <div className="w-full p-6 bg-black bg-opacity-70">
                      <p className="md:text-xl text-white">{niches[0].title}</p>
                      <p className="md:text-2xl text-xl font-semibold text-white mb-4">
                        {niches[0].description}
                      </p>
                      <Link
                        href={niches[0].href}
                        className="bg-transparent px-10 border-2 p-1.5  hover:bg-white hover:bg-opacity-20 md:text-xl rounded-none text-white font-semibold bg-black bg-opacity-30">
                        {
                          language === "pt-br" ?
                            "SAIBA MAIS" :
                            "DISCOVER MORE"
                        }
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`rounded-none ${niches[3].bgClass} bg-cover bg-center border-0 shadow h-full`}>
                  <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                    <div className="w-full p-6 bg-black bg-opacity-30">
                      <p className="md:text-xl text-white">{niches[3].title}</p>
                      <p className="md:text-2xl text-xl font-semibold text-white mb-4">
                        {niches[3].description}
                      </p>
                      <Link
                        href={niches[3].href}
                        className="bg-transparent px-10 border-2 p-1.5  md:text-xl rounded-none mt-6 hover:bg-white hover:bg-opacity-20 text-white font-semibold bg-black bg-opacity-30">
                        {
                          language === "pt-br" ?
                            "SAIBA MAIS" :
                            "DISCOVER MORE"
                        }
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <Card className={`rounded-none ${niches[1].bgClass} bg-center bg-cover border-0 shadow h-full`}>
                    <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                      <div className="w-full p-4 bg-black bg-opacity-30">
                        <p className="md:text-xl text-white">{niches[1].title}</p>
                        <p className="md:text-2xl text-xl font-semibold mb-4 text-white">
                          {niches[1].description}
                        </p>

                        <Link
                          href={niches[1].href}
                          className="bg-transparent px-10 border-2 p-1.5  md:text-xl rounded-none hover:bg-white hover:bg-opacity-20 text-white font-semibold bg-black bg-opacity-30">
                          {
                            language === "pt-br" ?
                              "SAIBA MAIS" :
                              "DISCOVER MORE"
                          }
                        </Link>

                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <Card className={`rounded-none ${niches[2].bgClass} bg-cover bg-center border-0 shadow h-full`}>
                    <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                      <div className="w-full p-4 bg-black bg-opacity-50">
                        <p className="md:text-xl text-white">{niches[2].title}</p>
                        <p className="md:text-2xl text-xl font-semibold mb-4 text-white">
                          {niches[2].description}
                        </p>
                        <Link
                          href={niches[2].href}
                          className="bg-transparent px-10 p-1.5 border-2  md:text-xl hover:bg-white hover:bg-opacity-20 rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                          {
                            language === "pt-br" ?
                              "SAIBA MAIS" :
                              "DISCOVER MORE"
                          }
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
          :
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}

            plugins={[
              Autoplay({
                delay: 3000,
                playOnInit: true,
                stopOnFocusIn: false,
                stopOnInteraction: false,
                stopOnLastSnap: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {niches.map((niche, index) => (
                <CarouselItem className="md:basis-1/2" key={index}>
                  <div className="p-1">
                    <Card className={`rounded-none ${niche.bgClass} bg-center bg-cover border-0 shadow`}>
                      <CardContent className="flex aspect-square md:aspect-video flex-col w-full justify-end items-start p-6 bg-black bg-opacity-50">
                        <span className="md:text-xl text-white">{niche.title}</span>
                        <span className="md:text-2xl text-xl font-semibold leading-6 text-white">
                          {niche.description}
                        </span>
                        <Link
                          href={niche.href}
                          className="bg-transparent px-10 border-2 p-2 hover:bg-white hover:bg-opacity-20  md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                          {
                            language === "pt-br" ?
                              "SAIBA MAIS" :
                              "DISCOVER MORE"
                          }
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      }

    </div>
  );
}
