"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const infoPt = {
  title: "CASES",
  description: "Cases de Sucesso",
};

const infoEn = {
  title: "CASES",
  description: "Success Cases",
};




export function Cases() {
  const { language } = useLanguageContext();

  const info = language === "en-us" ? infoEn : infoPt;
  const [video, setVideo] = useState(0);

  const videoSources = [
    "/videos/pacifil.mp4",
    "/videos/comil.mp4",
    "/videos/page.mp4",
    "/videos/oilgas.mp4"
  ];

  return (
    <div
      className="flex flex-col w-full items-center py-4 md:py-10 justify-center bg-zinc-50 "
      id="cases"
    >
      <div className="p-8 md:p-4 md:mb-10 text-black">
        <p className="text-lg  font-medium px-8 w-full text-center text-orange-600">
          {info.title}
        </p>
        <span className="md:text-5xl font-bold text-2xl">
          {info.description}
        </span>
      </div>

      <section className="flex flex-col gap-4 max-w-5xl">
        <video autoPlay muted loop key={video} className='w-full object-top'>
          <source src={videoSources[video]} type="video/mp4" />
        </video>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="w-full h-20 bg-zinc-200 border-b-4 border-b-orange-600 rounded-none focus:bg-slate-600"
            onClick={() => setVideo(0)}
          >
            <Image src="/clients/pacifil.png" alt="Pacifil" width={140} height={100} />
          </Button>

          <Button className="w-full h-20 bg-zinc-200 border-b-4 border-b-orange-600 rounded-none focus:bg-slate-600 group"
            onClick={() => setVideo(1)}
          >
            <Image src="/clients/comil.png" alt="Comil" width={140} height={100} className="invert group-focus:invert-0 group-hover:invert-0" />
          </Button>

          <Button className="w-full h-20 bg-zinc-200 border-b-4 border-b-orange-600 rounded-none focus:bg-slate-600"
            onClick={() => setVideo(2)}
          >
            <Image src="/clients/page.png" alt="Pagé" width={140} height={100} />
          </Button>

          <Button className="w-full h-20 text-black text-2xl font-bold bg-zinc-200 border-b-4 border-b-orange-600 rounded-none focus:bg-slate-600 focus:text-white hover:text-white"
            onClick={() => setVideo(3)}
          >
            <p>Oil & Gas</p>
          </Button>
        </div>
      </section>
    </div>
  );
}
