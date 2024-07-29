"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Saúde",
    sections: [
      {
        title: "Transformando a Saúde com Soluções Digitais de Produção Virtual e Gráficos em Tempo Real",
        description: "As soluções digitais, como Realidade Virtual (VR), Realidade Aumentada (AR) e renderizações em tempo real, estão revolucionando a área da saúde. A Niagara Studios oferece ferramentas inovadoras que podem transformar diversos aspectos do setor, desde o treinamento e a educação médica até o atendimento ao paciente e a gestão hospitalar.",
      },
      {
        title: "Treinamento e Educação Médica",
        description: "A Realidade Virtual permite a criação de simulações altamente realistas para o treinamento de profissionais de saúde. Médicos e enfermeiros podem praticar procedimentos complexos em um ambiente seguro e controlado, melhorando suas habilidades sem riscos para pacientes reais.",
      },
      {
        title: "Atendimento ao Paciente",
        description: "A Realidade Aumentada pode ser usada para melhorar o atendimento ao paciente de várias maneiras. Desde a visualização de exames médicos em 3D durante consultas até a assistência em tempo real durante cirurgias, a AR fornece informações críticas de maneira intuitiva e acessível.",
      },
      {
        title: "Renderizações em Tempo Real",
        description: "As renderizações em tempo real são fundamentais para o planejamento e a simulação de tratamentos. Elas permitem a visualização detalhada de órgãos e sistemas do corpo humano, ajudando os médicos a planejar cirurgias com precisão milimétrica e a prever possíveis complicações.",
      },
      {
        title: "Gestão Hospitalar",
        description: "Além do atendimento direto ao paciente, as soluções digitais da Niagara Studios também podem otimizar a gestão hospitalar. Sistemas de visualização avançados permitem o monitoramento eficiente de recursos e o planejamento de operações hospitalares, melhorando a eficiência e reduzindo custos.",
      }
    ]
  }
];

const infosEn = [
  {
    title: "Healthcare",
    sections: [
      {
        title: "Transforming Healthcare with Digital Solutions in Virtual Production and Real-Time Graphics",
        description: "Digital solutions such as Virtual Reality (VR), Augmented Reality (AR), and real-time renderings are revolutionizing the healthcare sector. Niagara Studios offers innovative tools that can transform various aspects of the field, from medical training and education to patient care and hospital management.",
      },
      {
        title: "Medical Training and Education",
        description: "Virtual Reality enables the creation of highly realistic simulations for training healthcare professionals. Doctors and nurses can practice complex procedures in a safe and controlled environment, enhancing their skills without risks to real patients.",
      },
      {
        title: "Patient Care",
        description: "Augmented Reality can be utilized to improve patient care in several ways. From visualizing medical scans in 3D during consultations to providing real-time assistance during surgeries, AR delivers critical information in an intuitive and accessible manner.",
      },
      {
        title: "Real-Time Renderings",
        description: "Real-time renderings are crucial for treatment planning and simulation. They allow for detailed visualization of organs and body systems, helping doctors plan surgeries with precise accuracy and anticipate potential complications.",
      },
      {
        title: "Hospital Management",
        description: "Beyond direct patient care, Niagara Studios’s digital solutions can also optimize hospital management. Advanced visualization systems enable efficient resource monitoring and operational planning, improving efficiency and reducing costs.",
      }
    ]
  }
];


export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/health.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-top" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Saúde" : "Healthcare"}
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
