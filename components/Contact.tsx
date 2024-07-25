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
      className="flex flex-col w-full items-center md:py-10 py-4 justify-center bg-industry-bg bg-bottom "
      id="contact"
    >
      <div className="p-8 md:p-4 md:mb-4 text-center">
        <p className=" text-4xl  font-medium px-8 w-full  text-center text-white">
          {
            language === "pt-br" ? "ENTRE EM CONTATO" : "CONTACT US"
          }
        </p>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 px-4">
        <Card className="rounded-none min-w-96 max-w-lg">
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
            <a href="mailto:comercial@niagarastudios.com.br" target="_blank" className="underline hover:text-orange-600">
              comercial@niagarastudios.com.br
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-none min-w-96  max-w-lg">
          <CardContent className="flex flex-col gap-4 w-full h-full   text-black justify-center p-6 bg-black bg-opacity-10">


            <div className="grid grid-cols-3 justify-center">
              <a href="#!" className="me-6 [&>svg]:h-12 [&>svg]:w-12 flex-col w-full text-orange-600 gap-4 font-semibold hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"

                >
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
                LinkedIn
              </a>

              <a href="#!" className="me-6 [&>svg]:h-12 [&>svg]:w-12 flex-col gap-4 text-orange-600 font-semibold hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
                X - Twitter
              </a>

              <a href="#!" className="me-6 [&>svg]:h-12 [&>svg]:w-12 flex-col gap-4 text-orange-600 items-center font-semibold hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram
              </a>
            </div>

            <span className=" text-xl font-semibold">
              {
                language === "pt-br" ?
                  "Nos siga nas redes sociais" :
                  "Follow us on social media"
              }
            </span>

          </CardContent>
        </Card>
      </div>



    </div>
  );
}
