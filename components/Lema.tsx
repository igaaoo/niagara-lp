import { Triangle } from "lucide-react";
import Image from "next/image";

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
register();

export function Lema() {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className="flex flex-col w-full items-center text-center md:text-left md:grid md:grid-cols-7 shadow-lg bg-orange-500   text-white  md:justify-between">

      <Image width={750} height={1334} alt="" src='/main1.jpg' className='w-full object-top  h-96 col-span-3' />

      <div className="flex flex-col text-left md:gap-4 gap-2 py-12  px-4  md:py-10 w-full col-span-4 md:px-20 ">
        <h2 className="md:text-xl font-medium font-space_grotesk">
          TRANSFORME SUAS IDEIAS EM REALIDADE
        </h2>
        <p className="md:text-4xl text-2xl font-space_grotesk font-semibold leading-8">
          ESTÚDIO ESPECIALIZADO EM DESENVOLVER
          PROJETOS 3D ULTRA REALISTA EM UNREAL
        </p>
      </div>


    </div>
  );
}