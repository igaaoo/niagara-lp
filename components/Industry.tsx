"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useLanguageContext } from "@/context/LanguageContext";

const nichesPt = [
  {
    title: "Saúde",
    description: "Transforme a saúde com simulações realistas e ambientes interativos",
    bgClass: "bg-carousel-health"
  },
  {
    title: "Educação",
    description: "Revolucione a educação com experiências de aprendizado envolventes",
    bgClass: "bg-carousel-education"
  },
  {
    title: "Treinamento",
    description: "Aprimore habilidades com treinamentos em ambientes ultra-realistas",
    bgClass: "bg-carousel-training"
  },
  {
    title: "Indústria",
    description: "Maximize a eficiência industrial com modelagens e simulações precisas",
    bgClass: "bg-carousel-industry"
  },
  {
    title: "Varejo",
    description: "Encante seus clientes com visualizações de produtos deslumbrantes",
    bgClass: "bg-carousel-retail"
  },
  {
    title: "Segurança do Trabalho",
    description: "Garanta a segurança com treinamentos imersivos e realistas",
    bgClass: "bg-carousel-safety"
  },
  {
    title: "Eventos",
    description: "Eleve seus eventos com cenários espetaculares e interativos",
    bgClass: "bg-carousel-events"
  }
];

const nichesEn = [
  {
    title: "Health",
    description: "Transform health with realistic simulations and interactive environments",
    bgClass: "bg-carousel-health"
  },
  {
    title: "Education",
    description: "Revolutionize education with engaging learning experiences",
    bgClass: "bg-carousel-education"
  },
  {
    title: "Training",
    description: "Enhance skills with ultra-realistic training environments",
    bgClass: "bg-carousel-training"
  },
  {
    title: "Industry",
    description: "Maximize industrial efficiency with precise modeling and simulations",
    bgClass: "bg-carousel-industry"
  },
  {
    title: "Retail",
    description: "Delight your customers with stunning product visualizations",
    bgClass: "bg-carousel-retail"
  },
  {
    title: "Work Safety",
    description: "Ensure safety with immersive and realistic training",
    bgClass: "bg-carousel-safety"
  },
  {
    title: "Events",
    description: "Elevate your events with spectacular and interactive scenarios",
    bgClass: "bg-carousel-events"
  }
];

export function Industry() {
  const { language } = useLanguageContext();

  const niches = language === "pt-br" ? nichesPt : nichesEn;

  return (
    <div className="flex flex-col w-full items-center md:py-10 justify-center bg-industry-bg md:bg-cover"
      id="industry"
    >
      <div className=" p-8 md:p-4 md:mb-10 text-white">
        <p className="m:text-2xl text-lg font-medium px-8 w-full  text-center text-orange-600">
          {
            language === "pt-br" ?
              "INDÚSTRIA" :
              "INDUSTRY"
          }
        </p>
        <span className="md:text-5xl font-bold text-2xl">
          {
            language === "pt-br" ?
              "Servicing the following niches" :
              "Serving the following niches"
          }
        </span>
      </div>

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
                <Card className={`rounded-none ${niche.bgClass} bg-cover border-0 shadow`}>
                  <CardContent className="flex aspect-square md:aspect-video flex-col w-full justify-end items-start p-6 bg-black bg-opacity-50">
                    <span className="md:text-xl text-white">{niche.title}</span>
                    <span className="md:text-2xl text-xl font-semibold leading-6 text-white">
                      {niche.description}
                    </span>
                    <Button variant="outline" className="bg-transparent px-10 border-2 md:text-xl rounded-none mt-6 text-white font-semibold bg-black bg-opacity-30">
                      DISCOVER MORE
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
    </div>
  );
}
