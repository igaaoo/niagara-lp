"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Soluções Educacionais",
    sections: [
      {
        title: "Transformando a Educação com Realidade Virtual (VR)",
        description: "A Realidade Virtual (VR) oferece uma maneira imersiva de aprender, permitindo que os alunos explorem ambientes históricos, experimentem simulações científicas e visitem locais remotos sem sair da sala de aula. Esta tecnologia enriquece o aprendizado, tornando-o mais envolvente e memorável.",
      },
      {
        title: "Aprimoramento do Ensino com Realidade Aumentada (AR)",
        description: "A Realidade Aumentada (AR) adiciona uma camada digital ao mundo real, proporcionando novas maneiras de interagir com o conteúdo educacional. Os estudantes podem visualizar modelos 3D de células, sistemas solares ou monumentos históricos diretamente em suas mesas, facilitando a compreensão de conceitos complexos.",
      },
      {
        title: "Plataformas Interativas para Educação",
        description: "Plataformas interativas baseadas em VR e AR oferecem uma abordagem personalizada ao aprendizado. Os estudantes podem aprender no seu próprio ritmo, revisitar conteúdos complexos e participar de atividades práticas que solidificam seu entendimento. Estas plataformas são ideais para ensino à distância e aprendizagem híbrida.",
      },
      {
        title: "Benefícios do Uso de VR e AR na Educação",
        description: "A utilização de VR e AR na educação traz benefícios significativos, incluindo maior engajamento dos alunos, melhor retenção de informações e uma compreensão mais profunda dos materiais didáticos. Estas tecnologias também facilitam o aprendizado experiencial, permitindo que os alunos aprendam fazendo.",
      },
      {
        title: "Projetos Educacionais com Tecnologias Imersivas",
        description: "Os projetos educacionais que incorporam tecnologias imersivas oferecem oportunidades únicas para exploração e descoberta. Estudantes podem participar de simulações realistas, explorar modelos 3D interativos e colaborar em ambientes virtuais, preparando-os para carreiras em diversas áreas tecnológicas.",
      },
    ]
  }
];

const infosEn = [
  {
    title: "Educational Solutions",
    sections: [
      {
        title: "Transforming Education with Virtual Reality (VR)",
        description: "Virtual Reality (VR) offers an immersive way to learn, allowing students to explore historical environments, experience scientific simulations, and visit remote locations without leaving the classroom. This technology enriches learning, making it more engaging and memorable.",
      },
      {
        title: "Enhancing Teaching with Augmented Reality (AR)",
        description: "Augmented Reality (AR) adds a digital layer to the real world, providing new ways to interact with educational content. Students can view 3D models of cells, solar systems, or historical monuments right on their desks, facilitating the understanding of complex concepts.",
      },
      {
        title: "Interactive Platforms for Education",
        description: "Interactive platforms based on VR and AR offer a personalized approach to learning. Students can learn at their own pace, revisit complex content, and engage in hands-on activities that solidify their understanding. These platforms are ideal for distance learning and hybrid education.",
      },
      {
        title: "Benefits of Using VR and AR in Education",
        description: "The use of VR and AR in education brings significant benefits, including increased student engagement, better retention of information, and a deeper understanding of educational materials. These technologies also facilitate experiential learning, allowing students to learn by doing.",
      },
      {
        title: "Educational Projects with Immersive Technologies",
        description: "Educational projects that incorporate immersive technologies offer unique opportunities for exploration and discovery. Students can participate in realistic simulations, explore interactive 3D models, and collaborate in virtual environments, preparing them for careers in various technological fields.",
      },
    ]
  }
];



export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/education.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Educação" : "Education"}
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
