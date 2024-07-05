import Image from "next/image";
import { Badge } from "./Itens/Badge";

export function Setup() {
  return (
    <div className="flex flex-col w-full items-center py-4 justify-center bg-gradient-to-t  from-[#7db6d4] to-[#497284] bg-cover bg-bottom px-4 md:px-20  pb-24">


      <div className=" w-full flex flex-col rounded mt-10 ">
        <div className="flex flex-col  md:grid md:grid-cols-2  gap-x-10 w-full ">
          <div className="mt-10 flex flex-col">

            <p className="text-4xl text-white    mb-8   border-b-2 pb-2 font-cabin font-semibold bg-white-400  bg-opacity-30 px-8 py-1 rounded-lg shadow-lg w-full text-center">Setup</p>

            <Image
              src="/setup.png"
              width={1280}
              height={772}
              quality={100}
              alt="Setup"
              priority
              className="  self-center mt-6 md:m-0" />
          </div>

          <div className="flex flex-col justify-center md:-mt-12  gap-4">

            <div >
              <div className="grid grid-cols-2 gap-2">
                <Badge colorBadge="white" title="Visão do Piloto" />
                <Badge colorBadge="cyan" title="Tela de Diagnóstico" />
              </div>
            </div>
            <div className="bg-white backdrop-blur-md  rounded-lg shadow-lg bg-opacity-20 p-4">
              <p className="text-white font-red-hat">
                Visão do Piloto
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Badge colorBadge="white" title="Bússola" />
                <Badge colorBadge="white" title="Cabo Umbilical" />
                <Badge colorBadge="white" title="Missões" />
                <Badge colorBadge="white" title="3 Câmeras" />
              </div>
            </div>

            <div className="bg-white backdrop-blur-md rounded-lg shadow-lg bg-opacity-20 p-4">
              <p className="text-white font-red-hat">
                Tela de Diagnóstico
              </p>
              <div className=" grid grid-cols-3 gap-2 mt-2">
                <Badge colorBadge="cyan" title="Sonar" />
                <Badge colorBadge="cyan" title="Bússola" />
                <Badge colorBadge="cyan" title="Posição" />
                <Badge colorBadge="cyan" title="Giro" />
                <Badge colorBadge="cyan" title="Alarmes" />
                <Badge colorBadge="cyan" title="Lanternas" />
              </div>
            </div>
          </div>



        </div>
      </div>

    </div>
  );
}