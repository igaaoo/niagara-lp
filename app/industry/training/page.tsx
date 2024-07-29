"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Treinamentos",
    sections: [
      {
        title: "Realidade Virtual (VR) para Treinamento Seguro e Imersivo",
        description: "A Realidade Virtual (VR) oferece um ambiente seguro e controlado para treinamentos industriais. Trabalhadores podem praticar operações complexas, simular situações de emergência e aprimorar suas habilidades sem riscos reais. Isso aumenta a eficácia do treinamento e reduz o potencial de acidentes no local de trabalho.",
      },
      {
        title: "Realidade Aumentada (AR) para Manutenção e Reparos",
        description: "A Realidade Aumentada (AR) facilita a manutenção e reparos industriais ao sobrepor instruções e informações diretamente sobre os equipamentos reais. Técnicos podem acessar guias passo a passo, identificar peças e solucionar problemas de forma eficiente, minimizando o tempo de inatividade e melhorando a precisão.",
      },
      {
        title: "Renderizações 3D para Simulações de Processos",
        description: "As renderizações 3D permitem criar simulações detalhadas de processos industriais. Estas simulações ajudam na visualização de procedimentos complexos, identificação de gargalos e otimização de operações. Treinamentos baseados em 3D capacitam os trabalhadores a entender melhor o fluxo de trabalho e a interagir com equipamentos de maneira mais eficaz.",
      },
      {
        title: "Plataformas Interativas para Treinamento Contínuo",
        description: "Plataformas interativas que utilizam VR e AR oferecem um treinamento contínuo e personalizado. Trabalhadores podem realizar módulos de treinamento em seu próprio ritmo, revisitar conteúdos importantes e participar de cenários práticos que refletem situações reais do dia a dia industrial. Isso resulta em um desenvolvimento de habilidades mais sólido e adaptável às necessidades específicas de cada indústria.",
      }
    ]
  }
];

const infosEn = [
  {
    title: "Training",
    sections: [
      {
        title: "Virtual Reality (VR) for Safe and Immersive Training",
        description: "Virtual Reality (VR) provides a safe and controlled environment for industrial training. Workers can practice complex operations, simulate emergency situations, and enhance their skills without real-world risks. This increases training effectiveness and reduces the potential for workplace accidents.",
      },
      {
        title: "Augmented Reality (AR) for Maintenance and Repairs",
        description: "Augmented Reality (AR) facilitates industrial maintenance and repairs by overlaying instructions and information directly onto real equipment. Technicians can access step-by-step guides, identify parts, and troubleshoot efficiently, minimizing downtime and improving accuracy.",
      },
      {
        title: "3D Renderings for Process Simulations",
        description: "3D renderings allow for detailed simulations of industrial processes. These simulations help visualize complex procedures, identify bottlenecks, and optimize operations. 3D-based training empowers workers to better understand workflow and interact more effectively with equipment.",
      },
      {
        title: "Interactive Platforms for Continuous Training",
        description: "Interactive platforms using VR and AR offer continuous and personalized training. Workers can complete training modules at their own pace, revisit important content, and engage in practical scenarios that reflect real-world industrial situations. This results in stronger skill development tailored to the specific needs of each industry.",
      }
    ]
  }
];




export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/training.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-top" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Treinamento" : "Training"}
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
