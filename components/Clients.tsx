"use client";
import Autoplay from "embla-carousel-autoplay";

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
    <div className="flex flex-col w-full items-center pb-10 justify-center bg-zinc-50"
      id="clients">
      <div className="p-12 md:p-8 md:mb-6 text-black text-center">
        {/* <p className="m:text-2xl text-lg  font-medium px-8 w-full  text-center">
          WHO TRUST
        </p> */}
        {/* <p className=" text-lg  font-medium px-8 w-full  text-center text-orange-600">
          {language === "pt-br" ? "QUEM CONFIA EM NÓS" : "WHO TRUST US"}
        </p> */}
        {/* <span className="font-bold  text-xl md:text-3xl ">
          {language === "pt-br" ? "Clientes e parceiros" : "Clients and partners"}
        </span> */}
      </div>


      <Carousel
        className="w-[90vw]"
        opts={{
          align: "center",
          loop: true
        }}

        plugins={[
          Autoplay({
            delay: 2000,
            playOnInit: true,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnLastSnap: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className=" basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/comil.png" alt="Comil" width={200} height={100} className="invert p-2" />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/pacifil.png" alt="Pacifil" width={140} height={100} />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96 " >
            <Image src="clients/page.png" alt="Pagé" width={200} height={100} className="bg-blue-600 p-4 rounded" />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/plasson.png" alt="Plasson" width={200} height={100} className="p-4" />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/safelive.png" alt="Safelive" width={200} height={100} className="p-2" />
          </CarouselItem>

          <CarouselItem className="basis-1/3 md:basis-1/5 w-96" >
            <Image src="clients/montana.png" alt="Montana" width={200} height={100} className="p-4" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
}
