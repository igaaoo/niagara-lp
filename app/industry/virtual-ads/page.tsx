"use client";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Imersivos e Interativos",
    sections: [
      {
        title: "Revolucionando a Publicidade com Realidade Virtual",
        description: "A Realidade Virtual (VR) está transformando a forma como as marcas se comunicam com seus públicos. A Niagara Studios oferece soluções inovadoras que permitem a criação de anúncios imersivos e interativos, proporcionando uma experiência única e memorável para os consumidores.",
      },
      {
        title: "Experiências de Marca Imersivas",
        description: "Com a VR, as marcas podem criar ambientes virtuais que envolvem totalmente o consumidor. Essas experiências imersivas aumentam o engajamento e deixam uma impressão duradoura, permitindo que os consumidores explorem produtos e serviços de maneira interativa.",
      },
      {
        title: "Anúncios Interativos",
        description: "Os anúncios em VR oferecem um nível de interatividade que os métodos tradicionais não conseguem alcançar. Os consumidores podem interagir diretamente com os produtos, explorar funcionalidades e até mesmo realizar compras dentro do ambiente virtual.",
      },
      {
        title: "Personalização Avançada",
        description: "A VR permite a criação de anúncios altamente personalizados. Com a capacidade de adaptar o conteúdo ao perfil e comportamento do usuário, as marcas podem oferecer experiências únicas e relevantes que aumentam a efetividade da campanha.",
      },
      {
        title: "Medição de Engajamento",
        description: "As soluções de VR da Niagara Studios permitem a coleta de dados detalhados sobre o comportamento do consumidor dentro do ambiente virtual. Essas informações são valiosas para medir o engajamento e ajustar as estratégias de marketing para obter melhores resultados.",
      }
    ]
  }
];

const infosEn = [
  {
    title: "Immersive and Interactive",
    sections: [
      {
        title: "Revolutionizing Advertising with Virtual Reality",
        description: "Virtual Reality (VR) is transforming how brands communicate with their audiences. Niagara Studios offers innovative solutions that enable the creation of immersive and interactive ads, providing a unique and memorable experience for consumers.",
      },
      {
        title: "Immersive Brand Experiences",
        description: "With VR, brands can create virtual environments that fully engage the consumer. These immersive experiences increase engagement and leave a lasting impression, allowing consumers to explore products and services interactively.",
      },
      {
        title: "Interactive Ads",
        description: "VR ads offer a level of interactivity that traditional methods can't match. Consumers can interact directly with products, explore features, and even make purchases within the virtual environment.",
      },
      {
        title: "Advanced Personalization",
        description: "VR allows for highly personalized ads. With the ability to tailor content to the user's profile and behavior, brands can deliver unique and relevant experiences that enhance campaign effectiveness.",
      },
      {
        title: "Engagement Measurement",
        description: "Niagara Studios' VR solutions enable the collection of detailed data on consumer behavior within the virtual environment. This information is valuable for measuring engagement and adjusting marketing strategies for better results.",
      }
    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/carousel/virtualad.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language !== "pt-br" ? "Virtual Ads" : "Anúncios Virtuais"}
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
