"use client";
import { Contact } from "@/components/Contact";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";


const infosPt = [
  {
    title: "Estúdios Virtuais",
    sections: [
      {
        title: "Transformando Produções com Estúdios Virtuais",
        description: "Os estúdios virtuais estão revolucionando a produção de mídia ao permitir a criação de ambientes imersivos e dinâmicos com o uso de tecnologias avançadas. A Niagara Studios oferece soluções de estúdios virtuais que combinam gráficos de alta qualidade com uma integração perfeita para proporcionar experiências visuais excepcionais.",
      },
      {
        title: "Produção Flexível",
        description: "Com os estúdios virtuais, as produções podem ser facilmente ajustadas e personalizadas para atender às necessidades específicas de cada projeto. Isso permite uma maior flexibilidade e criatividade, facilitando a criação de conteúdos visuais atraentes e inovadores.",
      },
      {
        title: "Eficiência de Custo",
        description: "A utilização de estúdios virtuais pode reduzir significativamente os custos de produção ao eliminar a necessidade de locações físicas e cenários complexos. Isso torna a produção mais acessível, permitindo que empresas de todos os tamanhos possam criar conteúdos de alta qualidade.",
      },
      {
        title: "Integração em Tempo Real",
        description: "As soluções de estúdios virtuais da Niagara Studios permitem a integração em tempo real de elementos virtuais e físicos. Isso proporciona uma experiência de produção contínua e eficiente, melhorando a qualidade e a consistência dos conteúdos produzidos.",
      },
      {
        title: "Aplicações Diversificadas",
        description: "Os estúdios virtuais podem ser utilizados em uma ampla gama de aplicações, desde transmissões ao vivo e programas de TV até eventos corporativos e treinamentos. Isso amplia as possibilidades de uso e maximiza o retorno sobre o investimento.",
      }
    ]
  }
];


const infosEn = [
  {
    title: "Virtual Studios",
    sections: [
      {
        title: "Transforming Productions with Virtual Studios",
        description: "Virtual studios are revolutionizing media production by enabling the creation of immersive and dynamic environments using advanced technologies. Niagara Studios offers virtual studio solutions that combine high-quality graphics with seamless integration to deliver exceptional visual experiences.",
      },
      {
        title: "Flexible Production",
        description: "With virtual studios, productions can be easily adjusted and customized to meet the specific needs of each project. This allows for greater flexibility and creativity, facilitating the creation of engaging and innovative visual content.",
      },
      {
        title: "Cost Efficiency",
        description: "Utilizing virtual studios can significantly reduce production costs by eliminating the need for physical locations and complex sets. This makes production more accessible, enabling companies of all sizes to create high-quality content.",
      },
      {
        title: "Real-Time Integration",
        description: "Niagara Studios' virtual studio solutions allow for real-time integration of virtual and physical elements. This provides a seamless and efficient production experience, enhancing the quality and consistency of the produced content.",
      },
      {
        title: "Diverse Applications",
        description: "Virtual studios can be used in a wide range of applications, from live broadcasts and TV shows to corporate events and training sessions. This broadens the scope of use and maximizes return on investment.",
      }
    ]
  }
];




export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/subpages/virtual-studios.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Estúdios Virtuais" : "Virtual Studios"}
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
