"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Varejo",
    sections: [
      {
        title: "Otimização de Operações de Loja",
        description: "Além de melhorar a experiência de compra, as soluções digitais também podem otimizar as operações de loja. Ferramentas de visualização avançadas permitem o planejamento eficiente do layout da loja e a análise de dados em tempo real, ajudando a maximizar a eficiência e a reduzir custos operacionais.",
      },
      {
        title: "Realidade Aumentada para Varejo",
        description: "A Realidade Aumentada pode ser usada para criar experiências de compra interativas e personalizadas. Desde provadores virtuais que permitem aos clientes experimentar roupas e acessórios até exibições interativas de produtos, a AR oferece uma maneira inovadora de melhorar a experiência do cliente.",
      },
      {
        title: "Renderizações em Tempo Real",
        description: "As renderizações em tempo real são essenciais para a criação de conteúdo visual dinâmico e atraente para lojas online e físicas. Elas permitem a visualização instantânea de produtos em diferentes contextos e ângulos, melhorando a forma como os consumidores percebem e interagem com os produtos.",
      },

    ]
  }
];


const infosEn = [
  {
    title: "Retail",
    sections: [
      {
        title: "Store Operations Optimization",
        description: "In addition to enhancing the shopping experience, digital solutions can also optimize store operations. Advanced visualization tools enable efficient store layout planning and real-time data analysis, helping to maximize efficiency and reduce operational costs.",
      },
      {
        title: "Augmented Reality for Retail",
        description: "Augmented Reality can be used to create interactive and personalized shopping experiences. From virtual fitting rooms that allow customers to try on clothes and accessories to interactive product displays, AR offers an innovative way to enhance the customer experience.",
      },
      {
        title: "Real-Time Renderings",
        description: "Real-time renderings are crucial for creating dynamic and engaging visual content for online and physical stores. They allow for instant visualization of products in different contexts and angles, improving how consumers perceive and interact with products.",
      },

    ]
  }
];






export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full py-10">
      <div className="w-full relative">
        <Image src="/subpages/retail.png" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Varejo" : "Retail"}
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
