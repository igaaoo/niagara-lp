"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";


const infosPt = [
  {
    title: "Estúdios Virtuais",
    sections: [
      {
        title: "A Evolução dos Estúdios Virtuais",
        description: "Desde a sua introdução nos anos 1980, os Estúdios Virtuais (VS) passaram por uma grande transformação. Naquela época, a baixa qualidade gráfica restringia seu uso a algumas produções específicas. A virada aconteceu em 2016, quando motores de renderização de jogos transformaram a indústria, permitindo que estúdios de diferentes tamanhos criassem ambientes imersivos usando apenas uma tela verde.",
      },
      {
        title: "Avanços com Unreal Engine",
        description: "O uso do Unreal Engine nas transmissões trouxe um salto significativo na qualidade gráfica. Com um pipeline de composição em tempo real e capacidades de chaveamento excepcionais, tornou-se possível criar soluções de VS sem precedentes.",
      },

    ]
  }
];

const infosEn = [
  {
    title: "Virtual Studios",
    sections: [
      {
        title: "The Advancement of Virtual Studios",
        description: "Since their inception in the 1980s, Virtual Studios (VS) have undergone remarkable evolution. Initially limited by low-quality graphics, their application was restricted to specific productions. The breakthrough came in 2016, when game rendering engines revolutionized the field, enabling studios of all sizes to create immersive environments with just a green screen.",
      },
      {
        title: "Progress with Unreal Engine",
        description: "The adoption of Unreal Engine for broadcasting significantly enhanced graphical quality. Combining real-time compositing pipelines with exceptional keying capabilities, it paved the way for unparalleled VS solutions.",
      },

    ]
  }
];



export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/virtual-studios.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Estúdios Virtuais" : "Virtual Studios"}
        </h2>
      </div>

      <section
        className="md:px-80 px-4 py-4"
      >
        <div className="flex flex-col md:px-10 md:py-10">
          {
            language === "pt-br" ? infosPt.map(info => (
              <div key={info.title} className="flex flex-col md:py-10">
                <h3 className="md:text-6xl text-2xl font-semibold text-orange-600">
                  {info.title}
                </h3>
                {
                  info.sections.map((section, index) => (
                    <div key={section.title} className="flex flex-col py-4 md:py-10">
                      <h4 className={`${index == 0 ? "md:text-3xl" : "md:text-lg"} text-lg font-semibold `}>
                        {section.title}
                      </h4>
                      <p className="md:text-xl">
                        {section.description}
                      </p>
                    </div>
                  ))
                }
              </div>
            )) : infosEn.map(info => (
              <div key={info.title} className="flex flex-col md:py-10">
                <h3 className="md:text-6xl text-2xl font-semibold text-orange-600">
                  {info.title}
                </h3>
                {
                  info.sections.map((section, index) => (
                    <div key={section.title} className="flex flex-col py-4 md:py-10">
                      <h4 className={`${index == 0 ? "md:text-3xl" : "md:text-lg"} text-lg font-semibold `}>
                        {section.title}
                      </h4>
                      <p className="md:text-xl">
                        {section.description}
                      </p>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </section>

      <Contact />
    </main>
  );
}
