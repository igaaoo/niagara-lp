"use client";
import { Contact } from "@/components/Contact";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Realidade Aumentada",
    sections: [
      {
        title: "Transformando Experiências com Realidade Aumentada",
        description: "A Realidade Aumentada (AR) está mudando a maneira como interagimos com o mundo ao nosso redor, sobrepondo informações digitais ao ambiente físico. A Niagara Studios oferece soluções de AR que criam experiências interativas e envolventes, permitindo que empresas de diversos setores aprimorem suas operações e engajem seus públicos de maneira inovadora.",
      },
      {
        title: "Treinamento e Educação",
        description: "A AR proporciona experiências de aprendizado imersivas, permitindo que estudantes e profissionais visualizem conceitos complexos e práticas de forma mais intuitiva. Isso melhora a retenção de conhecimento e a eficácia do treinamento.",
      },
      {
        title: "Engajamento do Cliente",
        description: "Com a AR, as empresas podem oferecer experiências personalizadas e interativas aos seus clientes. Desde a visualização de produtos em 3D até a interação com campanhas de marketing dinâmicas, a AR aumenta o engajamento e a satisfação do cliente.",
      },
      {
        title: "Manutenção e Suporte Técnico",
        description: "A AR pode ser utilizada para fornecer instruções visuais passo a passo para manutenção e reparo de equipamentos. Isso facilita o trabalho dos técnicos e reduz o tempo de inatividade, melhorando a eficiência operacional.",
      },
      {
        title: "Design e Visualização",
        description: "No setor de design, a AR permite a visualização de projetos em escala real no ambiente físico. Isso ajuda designers e engenheiros a identificar problemas e fazer ajustes antes da produção, economizando tempo e recursos.",
      }
    ]
  }
];


const infosEn = [
  {
    title: "Augmented Reality",
    sections: [
      {
        title: "Transforming Experiences with Augmented Reality",
        description: "Augmented Reality (AR) is changing how we interact with the world around us by overlaying digital information onto the physical environment. Niagara Studios offers AR solutions that create interactive and engaging experiences, enabling companies across various sectors to enhance their operations and engage their audiences in innovative ways.",
      },
      {
        title: "Training and Education",
        description: "AR provides immersive learning experiences, allowing students and professionals to visualize complex concepts and practices more intuitively. This improves knowledge retention and training effectiveness.",
      },
      {
        title: "Customer Engagement",
        description: "With AR, companies can offer personalized and interactive experiences to their customers. From visualizing products in 3D to interacting with dynamic marketing campaigns, AR increases customer engagement and satisfaction.",
      },
      {
        title: "Maintenance and Technical Support",
        description: "AR can be used to provide visual step-by-step instructions for equipment maintenance and repair. This makes it easier for technicians and reduces downtime, improving operational efficiency.",
      },
      {
        title: "Design and Visualization",
        description: "In the design sector, AR allows for the visualization of projects in real scale within the physical environment. This helps designers and engineers identify issues and make adjustments before production, saving time and resources.",
      }
    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/solutions/ar.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Realidade Aumentada" : "Augmented Reality"}
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
