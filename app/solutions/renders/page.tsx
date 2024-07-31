"use client";
import { Contact } from "@/components/Contact";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Renderizações",
    sections: [
      {
        title: "Transformando Visualizações com Renderizações de Alta Qualidade",
        description: "As renderizações de alta qualidade são fundamentais para criar visualizações precisas e detalhadas de produtos, ambientes e conceitos. A Niagara Studios oferece soluções de renderização que permitem às empresas transformar ideias em imagens realistas, aprimorando a comunicação visual e facilitando a tomada de decisões.",
      },
      {
        title: "Design de Produto",
        description: "No desenvolvimento de produtos, as renderizações detalhadas ajudam designers e engenheiros a visualizar e refinar projetos antes da produção. Isso acelera o processo de desenvolvimento e reduz os custos com prototipagem física.",
      },
      {
        title: "Arquitetura e Construção",
        description: "Para arquitetos e construtores, as renderizações de alta qualidade permitem a criação de visualizações realistas de edifícios e espaços. Isso facilita a apresentação de projetos para clientes e investidores, proporcionando uma compreensão clara do resultado final.",
      },
      {
        title: "Marketing e Publicidade",
        description: "As renderizações podem ser usadas em campanhas de marketing para criar imagens atraentes e realistas de produtos e serviços. Isso aumenta o engajamento do cliente e melhora a eficácia das campanhas publicitárias.",
      },
      {
        title: "Entretenimento e Mídia",
        description: "No setor de entretenimento, as renderizações de alta qualidade são essenciais para a criação de gráficos e efeitos visuais em filmes, jogos e animações. Elas permitem a produção de conteúdos visualmente impressionantes e imersivos.",
      }
    ]
  }
];



const infosEn = [
  {
    title: "Renderings",
    sections: [
      {
        title: "Transforming Visualizations with High-Quality Renderings",
        description: "High-quality renderings are essential for creating precise and detailed visualizations of products, environments, and concepts. Niagara Studios offers rendering solutions that allow companies to transform ideas into realistic images, enhancing visual communication and facilitating decision-making.",
      },
      {
        title: "Product Design",
        description: "In product development, detailed renderings help designers and engineers visualize and refine projects before production. This accelerates the development process and reduces costs associated with physical prototyping.",
      },
      {
        title: "Architecture and Construction",
        description: "For architects and builders, high-quality renderings enable the creation of realistic visualizations of buildings and spaces. This facilitates project presentations to clients and investors, providing a clear understanding of the final outcome.",
      },
      {
        title: "Marketing and Advertising",
        description: "Renderings can be used in marketing campaigns to create attractive and realistic images of products and services. This increases customer engagement and improves the effectiveness of advertising campaigns.",
      },
      {
        title: "Entertainment and Media",
        description: "In the entertainment sector, high-quality renderings are essential for creating graphics and visual effects in films, games, and animations. They enable the production of visually impressive and immersive content.",
      }
    ]
  }
];






export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/solutions/render.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          Renders
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
