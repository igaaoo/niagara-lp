"use client";
import { Contact } from "@/components/Contact";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Realidade Virtual",
    sections: [
      {
        title: "Transformando Experiências com Realidade Virtual",
        description: "A Realidade Virtual (VR) está revolucionando a forma como as pessoas interagem com o mundo digital. A Niagara Studios oferece soluções de VR que criam experiências imersivas e interativas, permitindo que empresas de diversos setores aprimorem suas operações e engajem seus públicos de maneira inovadora.",
      },
      {
        title: "Treinamento e Simulação",
        description: "A VR permite a criação de ambientes de treinamento altamente realistas e seguros. Profissionais podem praticar habilidades e procedimentos em um ambiente virtual, reduzindo riscos e aumentando a eficácia do treinamento.",
      },
      {
        title: "Experiências de Cliente",
        description: "As soluções de VR da Niagara Studios permitem que empresas ofereçam experiências únicas para seus clientes. Desde visitas virtuais a imóveis até test drives de veículos, a VR proporciona uma interação profunda e memorável com os produtos e serviços.",
      },
      {
        title: "Design e Prototipagem",
        description: "No setor de design e desenvolvimento de produtos, a VR facilita a visualização de protótipos em 3D. Isso permite uma melhor avaliação de designs, acelera o processo de desenvolvimento e reduz custos com prototipagem física.",
      },
      {
        title: "Eventos e Conferências",
        description: "A VR transforma a forma como eventos e conferências são realizados. Participantes podem vivenciar palestras, workshops e exposições de forma imersiva, independentemente de sua localização geográfica.",
      }
    ]
  }
];

const infosEn = [
  {
    title: "Virtual Reality",
    sections: [
      {
        title: "Transforming Experiences with Virtual Reality",
        description: "Virtual Reality (VR) is revolutionizing how people interact with the digital world. Niagara Studios offers VR solutions that create immersive and interactive experiences, enabling companies across various sectors to enhance their operations and engage their audiences in innovative ways.",
      },
      {
        title: "Training and Simulation",
        description: "VR enables the creation of highly realistic and safe training environments. Professionals can practice skills and procedures in a virtual setting, reducing risks and increasing training effectiveness.",
      },
      {
        title: "Customer Experiences",
        description: "Niagara Studios' VR solutions allow companies to offer unique experiences to their customers. From virtual property tours to vehicle test drives, VR provides a deep and memorable interaction with products and services.",
      },
      {
        title: "Design and Prototyping",
        description: "In the design and product development sector, VR facilitates the visualization of 3D prototypes. This allows for better design evaluation, accelerates the development process, and reduces costs associated with physical prototyping.",
      },
      {
        title: "Events and Conferences",
        description: "VR transforms how events and conferences are conducted. Attendees can experience lectures, workshops, and exhibitions in an immersive way, regardless of their geographical location.",
      }
    ]
  }
];




export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/solutions/vr.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Realidade Virtual" : "Virtual Reality"}
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
