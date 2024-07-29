"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Patrocínios Virtuais | Eventos",
    sections: [
      {
        title: "Transformando Patrocínios de Eventos com Soluções Virtuais",
        description: "As soluções virtuais estão redefinindo a forma como os patrocinadores interagem com os participantes de eventos. A Niagara Studios oferece ferramentas inovadoras que permitem a criação de experiências de patrocínio imersivas e interativas, aumentando a visibilidade da marca e o engajamento do público.",
      },
      {
        title: "Exposição de Marca Ampliada",
        description: "Com os patrocinadores virtuais, a visibilidade da marca é significativamente aumentada. As empresas podem criar estandes virtuais, banners interativos e outros elementos visuais que capturam a atenção dos participantes e promovem a marca de maneira eficaz.",
      },
      {
        title: "Engajamento Interativo",
        description: "As soluções de patrocínio virtual permitem que os participantes interajam diretamente com os produtos e serviços dos patrocinadores. Isso pode incluir demonstrações ao vivo, quizzes interativos e outros conteúdos que mantêm o público engajado e interessado.",
      },
      {
        title: "Análises e Insights",
        description: "A tecnologia virtual permite a coleta de dados detalhados sobre o comportamento dos participantes, oferecendo insights valiosos para os patrocinadores. Esses dados podem ser usados para medir a eficácia do patrocínio e ajustar as estratégias para futuros eventos.",
      },
      {
        title: "Soluções Personalizadas",
        description: "As soluções da Niagara Studios são altamente personalizáveis, permitindo que os patrocinadores adaptem suas experiências virtuais às necessidades específicas do evento e do público-alvo. Isso garante uma abordagem mais eficaz e direcionada.",
      }
    ]
  }
];


const infosEn = [
  {
    title: "Virtual Sponsors | Events",
    sections: [
      {
        title: "Transforming Event Sponsorship with Virtual Solutions",
        description: "Virtual solutions are redefining how sponsors interact with event attendees. Niagara Studios offers innovative tools that enable the creation of immersive and interactive sponsorship experiences, enhancing brand visibility and audience engagement.",
      },
      {
        title: "Enhanced Brand Exposure",
        description: "With virtual sponsors, brand visibility is significantly increased. Companies can create virtual booths, interactive banners, and other visual elements that capture attendees' attention and effectively promote the brand.",
      },
      {
        title: "Interactive Engagement",
        description: "Virtual sponsorship solutions allow attendees to interact directly with sponsors' products and services. This can include live demonstrations, interactive quizzes, and other content that keeps the audience engaged and interested.",
      },
      {
        title: "Analytics and Insights",
        description: "Virtual technology enables the collection of detailed data on attendee behavior, providing valuable insights for sponsors. This data can be used to measure sponsorship effectiveness and adjust strategies for future events.",
      },
      {
        title: "Customized Solutions",
        description: "Niagara Studios' solutions are highly customizable, allowing sponsors to tailor their virtual experiences to the specific needs of the event and target audience. This ensures a more effective and targeted approach.",
      }
    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/carousel/virtualSponsors.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Patrocínios Virtuais | Eventos" : "Virtual Sponsors | Events"}
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
