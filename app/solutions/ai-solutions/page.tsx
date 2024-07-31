"use client";
import { Contact } from "@/components/Contact";
import { useLanguageContext } from "@/context/LanguageContext";
import Image from "next/image";

const infosPt = [
  {
    title: "Inteligência Artificial",
    sections: [
      {
        title: "Transformando a Mídia com Soluções de Inteligência Artificial",
        description: "A Inteligência Artificial (IA) está revolucionando a indústria da mídia, oferecendo soluções inovadoras que aprimoram a criação, personalização e distribuição de conteúdo. A Niagara Studios fornece ferramentas de IA que podem ser integradas em várias etapas da produção de mídia para otimizar resultados.",
      },
      {
        title: "Geração de Imagens",
        description: "A IA pode gerar imagens de alta qualidade a partir de descrições textuais ou exemplos, facilitando a criação de gráficos, ilustrações e cenários virtuais. Isso acelera o processo criativo e reduz a necessidade de recursos físicos.",
      },
      {
        title: "Legendas Automáticas em Vídeos",
        description: "As soluções de IA permitem a geração automática de legendas para vídeos, melhorando a acessibilidade e a experiência do usuário. Essa tecnologia também pode traduzir e adaptar legendas para diferentes idiomas, ampliando o alcance do conteúdo.",
      },
      {
        title: "Análise de Imagens e Vídeos",
        description: "A IA pode analisar imagens e vídeos para identificar objetos, pessoas, cenários e até mesmo emoções. Isso é útil para a categorização de conteúdo, recomendações personalizadas e monitoramento de conformidade com as diretrizes da plataforma.",
      },
      {
        title: "Edição de Conteúdo",
        description: "A IA pode ser usada para editar vídeos e fotos automaticamente, aplicando filtros, corrigindo cores e melhorando a qualidade geral do conteúdo. Isso reduz o tempo de pós-produção e garante um resultado profissional.",
      }
    ]
  }
];


const infosEn = [
  {
    title: "Artificial Intelligence",
    sections: [
      {
        title: "Transforming Media with Artificial Intelligence Solutions",
        description: "Artificial Intelligence (AI) is revolutionizing the media industry, offering innovative solutions that enhance the creation, personalization, and distribution of content. Niagara Studios provides AI tools that can be integrated at various stages of media production to optimize results.",
      },
      {
        title: "Image Generation",
        description: "AI can generate high-quality images from textual descriptions or examples, facilitating the creation of graphics, illustrations, and virtual environments. This accelerates the creative process and reduces the need for physical resources.",
      },
      {
        title: "Automatic Video Subtitles",
        description: "AI solutions enable the automatic generation of subtitles for videos, improving accessibility and user experience. This technology can also translate and adapt subtitles for different languages, expanding the content's reach.",
      },
      {
        title: "Image and Video Analysis",
        description: "AI can analyze images and videos to identify objects, people, scenes, and even emotions. This is useful for content categorization, personalized recommendations, and monitoring compliance with platform guidelines.",
      },
      {
        title: "Content Editing",
        description: "AI can be used to automatically edit videos and photos, applying filters, correcting colors, and enhancing overall content quality. This reduces post-production time and ensures a professional result.",
      }
    ]
  }
];





export default function Home() {
  const { language } = useLanguageContext();

  return (
    <main className="flex flex-col w-full pt-10">
      <div className="w-full relative">
        <Image src="/solutions/ai.jpg" alt="Healthcare" width={1920} height={1080} className="w-full md:h-96 h-64 object-cover object-center" />
        <h2
          className="md:text-8xl text-6xl bg-black bg-opacity-40 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center font-semibold text-white"
        >
          {language === "pt-br" ? "Soluções com Inteligência Artificial" : "Artificial Intelligence Solution"}
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
