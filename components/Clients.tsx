"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguageContext } from "@/context/LanguageContext";

import Image from "next/image";



export function Clients() {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col w-full items-center pb-10 justify-center  bg-gradient-to-b from-white to-slate-200">
      <div className="p-8 md:p-4 md:mb-10 text-black text-center">
        {/* <p className="m:text-2xl text-lg  font-medium px-8 w-full  text-center">
          WHO TRUST
        </p> */}
        <p className="md:text-4xl font-bold  text-2xl text-orange-600">
          {language === "pt-br" ? "Quem Confia" : "Who Trust"}
        </p>
        <span className="font-bold  text-2xl">
          {language === "pt-br" ? "Alguns de nossos clientes e parceiros" : "Some of our clients and partners"}
        </span>
      </div>


      <Carousel
        className="w-[90vw]"
        opts={{
          align: "center",

          loop: true,

        }}
      >
        <CarouselContent>
          <CarouselItem className=" basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/comil.png" alt="Comil" width={200} height={100} className="invert" />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/pacifil.png" alt="Pacifil" width={140} height={100} />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/page.png" alt="Pagé" width={200} height={100} />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/plasson.png" alt="Plasson" width={200} height={100} />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/safelive.png" alt="Safelive" width={200} height={100} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
}
