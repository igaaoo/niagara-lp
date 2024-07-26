"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Indústria",
    sections: [
      {
        title: "Modelagens 3D para Otimização de Processos",
        description: "A modelagem 3D proporciona uma visão detalhada dos processos industriais, permitindo a visualização precisa de fluxos de trabalho e operações. Ao criar representações digitais dos sistemas e equipamentos, é possível identificar e corrigir gargalos, otimizar o layout das fábricas e melhorar a eficiência operacional.",
      },
      {
        title: "Simulações Precisos para Testes e Prevenção",
        description: "Simulações avançadas permitem testar cenários e processos sem interromper a produção real. Isso facilita a análise de diferentes condições e variáveis, ajudando a prever problemas antes que eles ocorram e a implementar soluções eficazes para maximizar a eficiência e reduzir custos.",
      },
      {
        title: "Realidade Virtual (VR) para Treinamento e Planejamento",
        description: "A Realidade Virtual (VR) oferece um ambiente imersivo para treinamento e planejamento industrial. Trabalhadores e engenheiros podem simular operações e processos, testar novos layouts e procedimentos, e melhorar suas habilidades sem comprometer a segurança ou a produção real. Isso resulta em maior eficiência e menores custos operacionais.",
      },
      {
        title: "Realidade Aumentada (AR) para Suporte em Tempo Real",
        description: "A Realidade Aumentada (AR) fornece suporte em tempo real durante a operação e manutenção dos equipamentos. Com informações e instruções sobrepostas diretamente sobre os sistemas em funcionamento, técnicos e operadores podem tomar decisões mais rápidas e precisas, aumentando a eficiência e reduzindo o tempo de inatividade.",
      }
    ]
  }
];

const infosEn = [
  {
    title: "Industry",
    sections: [
      {
        title: "3D Modeling for Process Optimization",
        description: "3D modeling provides a detailed view of industrial processes, allowing precise visualization of workflows and operations. By creating digital representations of systems and equipment, you can identify and address bottlenecks, optimize factory layouts, and enhance operational efficiency.",
      },
      {
        title: "Accurate Simulations for Testing and Prevention",
        description: "Advanced simulations enable testing of scenarios and processes without interrupting actual production. This facilitates the analysis of different conditions and variables, helping to anticipate problems before they arise and implement effective solutions to maximize efficiency and reduce costs.",
      },
      {
        title: "Virtual Reality (VR) for Training and Planning",
        description: "Virtual Reality (VR) offers an immersive environment for industrial training and planning. Workers and engineers can simulate operations and processes, test new layouts and procedures, and improve their skills without compromising safety or actual production. This results in greater efficiency and lower operational costs.",
      },
      {
        title: "Augmented Reality (AR) for Real-Time Support",
        description: "Augmented Reality (AR) provides real-time support during equipment operation and maintenance. By overlaying information and instructions directly onto active systems, technicians and operators can make quicker, more accurate decisions, increasing efficiency and reducing downtime.",
      }
    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full py-10">
      <div className="w-full relative">
        <Image src="/subpages/industry.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Indústria" : "Industry"}
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
