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


const niches = [
  {
    title: "Estúdios Virtuais",
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

export function Solutions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window != undefined && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);


  return (
    <div className="flex flex-col w-full items-center md:py-10 justify-center  bg-gradient-to-t from-white to-slate-200">
      <div className="p-8 md:p-4 md:mb-10 text-black">
        <p className="m:text-2xl text-lg  font-medium px-8 w-full font-space_grotesk text-center">
          SOLUÇÕES
        </p>
        <span className="md:text-5xl font-bold font-space_grotesk text-2xl">Onde o real se encontra com o virtual</span>
      </div>

      {
        !isMobile ?
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-[80%] min-h-[600px] h-full w-full bg-white shadow-lg"
          >
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="horizontal">
                <Card className={`rounded-none ${niches[0].bgClass} bg-cover border-0 shadow bg-center h-full`}>
                  <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                    <div className="w-full p-6 bg-black bg-opacity-70">
                      <p className="md:text-xl text-white">{niches[0].title}</p>
                      <p className="md:text-2xl text-xl font-semibold text-white">
                        {niches[0].description}
                      </p>
                      <Button variant="outline" className="bg-transparent px-10 border-2  md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                        Saiba Mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className={`rounded-none ${niches[3].bgClass} bg-cover bg-center border-0 shadow h-full`}>
                  <CardContent className="flex p-0 flex-col w-full h-full justify-end">
                    <div className="w-full p-6 bg-black bg-opacity-30">
                      <p className="md:text-xl text-white">{niches[3].title}</p>
                      <p className="md:text-2xl text-xl font-semibold text-white">
                        {niches[3].description}
                      </p>
                      <Button variant="outline" className="bg-transparent px-10 border-2  md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                        Saiba Mais
                      </Button>
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
                        <p className="md:text-2xl text-xl font-semibold text-white">
                          {niches[1].description}
                        </p>
                        <Button variant="outline" className="bg-transparent px-10 border-2  md:text-xl rounded-none mt-6 text-white font-semibold">
                          Saiba Mais
                        </Button>
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
                        <p className="md:text-2xl text-xl font-semibold text-white">
                          {niches[2].description}
                        </p>
                        <Button variant="outline" className="bg-transparent px-10 border-2  md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                          Saiba Mais
                        </Button>
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
                        <Button variant="outline" className="bg-transparent px-10 border-2  md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                          Saiba Mais
                        </Button>
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
