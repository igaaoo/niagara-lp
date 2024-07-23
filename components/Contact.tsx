"use client";
import { Card, CardContent } from "@/components/ui/card";

import { useLanguageContext } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";


const nichesPt = [
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


export function Contact() {
  const { language } = useLanguageContext();


  return (
    <div
      className="flex flex-col w-full items-center md:py-10 py-4 justify-center bg-industry-bg bg-right "
      id="contact"
    >
      <div className="p-8 md:p-4 md:mb-4 text-center">
        <p className=" text-4xl  font-medium px-8 w-full  text-center text-white">
          {
            language === "pt-br" ? "ENTRE EM CONTATO" : "CONTACT US"
          }
        </p>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 px-10">
        <Card className="rounded-none">
          <CardContent className="flex gap-4 flex-col w-full text-black justify-end items-start p-6 bg-zinc-200">
            <Mail size={48} className="text-orange-600" />
            <span className="text-2xl text-orange-600">Email</span>
            <span className="md:text-lg text-xl font-semibold">
              {
                language === "pt-br" ?
                  "Sinta-se à vontade para entrar em contato conosco para realizar um orçamento" :
                  "Feel free to contact us for a quote"
              }
            </span>
            <a href="mailto:comercial@niagarastudios.com.br" target="_blank" className="underline">
              comercial@niagarastudios.com.br
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-none">
          <CardContent className="flex gap-4 flex-col w-full text-black justify-end items-start p-6 bg-black bg-opacity-10">
            <Phone size={48} className="text-orange-600" />
            <span className="text-2xl text-orange-600">
              {
                language === "pt-br" ? "Telefone" : "Phone"
              }
            </span>
            <span className="md:text-lg text-xl font-semibold">
              {
                language === "pt-br" ?
                  "Nossa equipe está aqui para ajudá-lo no que pudermos. Também via Whatsapp." :
                  "Our team is here to help you in any way we can. Also via Whatsapp."
              }
            </span>
            <a className="underline" target="_blank" href="tel:+5511999999999">
              +55 11 99999-9999
            </a>
          </CardContent>
        </Card>
      </div>



    </div>
  );
}
