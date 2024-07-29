"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Segurança no Trabalho",
    sections: [
      {
        title: "Otimização das Práticas de Segurança",
        description: "Além de melhorar o treinamento e a conscientização, as soluções digitais também podem otimizar as práticas de segurança no trabalho. Ferramentas avançadas permitem monitoramento em tempo real e análise de dados para identificar áreas de melhoria, aumentar a conformidade e reduzir incidentes.",
      },
      {
        title: "Realidade Aumentada para Segurança",
        description: "A Realidade Aumentada pode ser utilizada para melhorar a segurança no trabalho, proporcionando visualizações e instruções em tempo real sobre práticas e equipamentos de segurança. Desde a demonstração de procedimentos corretos até a identificação de riscos, a AR ajuda a garantir que os funcionários estejam sempre informados e preparados.",
      },
      {
        title: "Renderizações em Tempo Real",
        description: "As renderizações em tempo real são essenciais para criar visualizações dinâmicas e precisas de ambientes de trabalho e situações de risco. Elas permitem a modelagem detalhada de cenários e a análise de possíveis riscos, ajudando a planejar e implementar medidas de segurança com maior eficácia.",
      },

    ]
  }
];


const infosEn = [
  {
    title: "Work Safety",
    sections: [
      {
        title: "Optimizing Safety Practices",
        description: "In addition to enhancing training and awareness, digital solutions can also optimize work safety practices. Advanced tools enable real-time monitoring and data analysis to identify areas for improvement, increase compliance, and reduce incidents.",
      },
      {
        title: "Augmented Reality for Safety",
        description: "Augmented Reality can be used to enhance work safety by providing real-time visualizations and instructions on safety practices and equipment. From demonstrating proper procedures to identifying hazards, AR helps ensure that employees are always informed and prepared.",
      },
      {
        title: "Real-Time Renderings",
        description: "Real-time renderings are crucial for creating dynamic and accurate visualizations of work environments and risk situations. They allow for detailed modeling of scenarios and risk analysis, helping to plan and implement safety measures more effectively.",
      },

    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/safety.jpeg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Segurança no Trabalho" : "Work Safety"}
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
