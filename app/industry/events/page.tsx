"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Eventos",
    sections: [
      {
        title: "Gestão e Logística de Eventos",
        description: "Além de melhorar a experiência do público, as soluções digitais também podem otimizar a gestão e a logística de eventos. Sistemas avançados de visualização e controle permitem um planejamento eficiente e a execução de eventos complexos com precisão, ajudando a garantir o sucesso de cada evento.",
      },
      {
        title: "Experiências Imersivas",
        description: "Os Estúdios Virtuais permitem a criação de cenários imersivos para eventos, criando ambientes que capturam a atenção do público e proporcionam uma experiência única. Seja para shows, lançamentos de produtos ou eventos corporativos, a tecnologia de estúdio virtual leva a produção a um novo patamar.",
      },
      {
        title: "Eventos Virtuais e Híbridos",
        description: "A Realidade Aumentada e os gráficos em tempo real possibilitam a realização de eventos virtuais e híbridos de alta qualidade. Com estas ferramentas, é possível interagir com o público em tempo real, oferecer apresentações impactantes e criar experiências memoráveis, independentemente da localização dos participantes.",
      },
      {
        title: "Personalização e Interatividade",
        description: "As soluções digitais permitem a personalização e a interatividade em eventos. Desde gráficos dinâmicos e vídeos ao vivo até a criação de experiências interativas para os participantes, essas ferramentas ajudam a manter o público engajado e a criar eventos que realmente se destacam.",
      },

    ]
  }
];



const infosEn = [
  {
    title: "Events",
    sections: [
      {
        title: "Event Management and Logistics",
        description: "In addition to enhancing the audience experience, digital solutions can also optimize event management and logistics. Advanced visualization and control systems allow for efficient planning and execution of complex events, helping to ensure the success of every event.",
      },

      {
        title: "Immersive Experiences",
        description: "Virtual Studios enable the creation of immersive environments for events, crafting settings that captivate the audience and deliver a unique experience. Whether for concerts, product launches, or corporate events, virtual studio technology elevates production to new heights.",
      },
      {
        title: "Virtual and Hybrid Events",
        description: "Augmented Reality and real-time graphics facilitate high-quality virtual and hybrid events. With these tools, you can interact with the audience in real-time, deliver impactful presentations, and create memorable experiences regardless of participants' locations.",
      },
      {
        title: "Customization and Interactivity",
        description: "Digital solutions enable customization and interactivity at events. From dynamic graphics and live videos to creating interactive experiences for attendees, these tools help keep the audience engaged and make events truly stand out.",
      },

    ]
  }
];






export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/events.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Eventos" : "Events"}
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
