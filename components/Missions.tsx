
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Badge } from './Itens/Badge';


export function Missions() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className="flex flex-col w-full items-center py-4 justify-center bg-missions-bg px-4 md:px-20 bg-cover bg-bottom -mt-1  pb-24">
      <div className='w-full flex flex-col-reverse md:grid md:grid-cols-3 gap-8 mt-10'>



        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="w-full flex justify-center items-start overflow-visible col-span-2">
          <SwiperSlide className='flex w-full justify-center'>
            <div className="min-w-full self-center 2xl:max-w-md h-full font-red-hat bg-white backdrop-blur-lg  rounded-lg shadow-lg bg-opacity-20 p-4">
              <Image src="/canos.jpeg" width={700} height={500} className="object-cover w-full h-96 rounded-lg" alt="Joystick" />
              <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl  tracking-tight text-white font-red-hat">Reparo de Canos</h5>

                <p className='text-white font-red-hat '>
                  Remover a ferrugem e realizar o polimento dos canos submersos.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='flex w-full justify-center'>
            <div className="min-w-full self-center 2xl:max-w-md h-full font-red-hat bg-white backdrop-blur-lg  rounded-lg shadow-lg bg-opacity-20 p-4">
              <Image src="/arvores.jpeg" width={700} height={500} className="object-cover w-full h-96 rounded-lg" alt="Joystick" />
              <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl  tracking-tight text-white font-red-hat">Árvores e Manifold</h5>

                <p className='text-white font-red-hat '>
                  Localizar as Árvores e Manifold e descartar lixos encontrados pelo mapa.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='flex w-full justify-center'>
            <div className="min-w-full self-center 2xl:max-w-md h-full font-red-hat bg-white backdrop-blur-lg  rounded-lg shadow-lg bg-opacity-20 p-4">
              <Image src="/estrutura.jpeg" width={700} height={500} className="object-cover w-full h-96 rounded-lg" alt="Joystick" />
              <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl  tracking-tight text-white font-red-hat">Estrutura Fixa</h5>

                <p className='text-white font-red-hat '>
                  Pegar os anodos novos, localizar as posições de encaixe e posicioná-los.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='flex w-full justify-center'>
            <div className="min-w-full self-center 2xl:max-w-md h-full font-red-hat bg-white backdrop-blur-lg  rounded-lg shadow-lg bg-opacity-20 p-4">
              <Image src="/treinamento.jpeg" width={700} height={500} className="object-cover w-full h-96 rounded-lg" alt="Joystick" />
              <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl  tracking-tight text-white font-red-hat">Treinamento braço de 7</h5>

                <p className='text-white font-red-hat '>
                  Aprender os comandos do braço de 7 funções.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='flex flex-col h-full w-full justify-center'>
          <h5 className="text-4xl  text-cyan-900  mb-4   border-b-2 pb-2 font-cabin font-semibold   bg-opacity-30 px-8 py-1 rounded-lg shadow-lg w-full text-center">Missões</h5>
          <section className='bg-white bg-opacity-20 rounded-lg shadow-lg p-8  w-full'>
            <p className='text-cyan-900 font-red-hat text-xl 2xl:text-3xl'>
              Atualmente o simulador nautilus conta com 4 missões:
            </p>
            <div className='flex flex-col gap-2 mt-4'>
              <span className={`bg-cyan-900 font-red-hat  font-semibold bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded`}>Reparo de Canos</span>

              <span className={`bg-white font-red-hat  font-semibold bg-opacity-20 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded`}>Árvores e Manifold</span>

              <span className={`bg-cyan-900 font-red-hat  font-semibold bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded`}>Estrutura Fixa</span>

              <span className={`bg-white font-red-hat  font-semibold bg-opacity-20 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded`}>Treinamento Braço</span>
            </div>
          </section>
        </div>
      </div>

    </div>

  );
}