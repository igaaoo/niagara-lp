import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const niches = [
  {
    title: "Saúde",
    description: "Transforme a saúde com simulações 3D realistas e ambientes interativos",
    bgClass: "bg-carousel-health"
  },
  {
    title: "Educação",
    description: "Revolucione a educação com experiências de aprendizado 3D envolventes",
    bgClass: "bg-carousel-education"
  },
  {
    title: "Treinamento",
    description: "Aprimore habilidades com treinamentos em ambientes 3D ultra-realistas",
    bgClass: "bg-carousel-training"
  },
  // {
  //   title: "Corporativo",
  //   description: "Inove suas apresentações corporativas com simulações 3D dinâmicas",
  //   bgClass: "bg-carousel-corporate"
  // },
  {
    title: "Indústria",
    description: "Maximize a eficiência industrial com modelagens e simulações precisas em 3D",
    bgClass: "bg-carousel-industry"
  },
  {
    title: "Varejo",
    description: "Encante seus clientes com visualizações de produtos em 3D deslumbrantes",
    bgClass: "bg-carousel-retail"
  },
  {
    title: "Segurança do Trabalho",
    description: "Garanta a segurança com treinamentos imersivos e realistas em 3D",
    bgClass: "bg-carousel-safety"
  },
  {
    title: "Eventos",
    description: "Eleve seus eventos com cenários 3D espetaculares e interativos",
    bgClass: "bg-carousel-events"
  }
];

export function Industry() {
  return (
    <div className="flex flex-col w-full items-center md:py-10 justify-center bg-industry-bg md:bg-cover">
      <div className=" p-8 md:p-4 md:mb-10 text-white">
        <p className="m:text-2xl text-lg font-medium px-8 w-full font-space_grotesk text-center">
          INDÚSTRIA
        </p>
        <span className="md:text-5xl font-bold font-space_grotesk text-2xl">Atendendo os seguintes nichos</span>
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
                      Entrar em Contato
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
