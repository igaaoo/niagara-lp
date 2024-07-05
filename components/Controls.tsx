import Image from "next/image";

export function Controls() {
  return (
    <div className="flex flex-col w-full items-center py-4 justify-center bg-gradient-to-t  from-[#7db6d4] to-[#497284] px-4 md:px-20  pb-24">
      <p className="text-4xl text-white  2xl:mb-20 md:mb-10 mb-8 mt-10  border-b-2 pb-2 font-cabin font-semibold bg-white-400  bg-opacity-30 px-8 py-1 rounded-lg shadow-lg w-full text-center">Controles</p>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-10 w-full justify-center items-center">
        <div className="md:max-w-sm w-full 2xl:max-w-md h-full bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter rounded-lg shadow-lg">
          <Image src="/keyboard.png" width={700} height={500} className="object-contain w-full h-64 rounded-t-lg" alt="Joystick" />
          <div className="p-5">

            <h5 className="mb-2 text-2xl 2xl:text-3xl font-bold font-red-hat tracking-tight text-[#497284]">Teclado ou Bancada</h5>

            <div className="flex flex-wrap gap-2">
              <span className={`bg-cyan-900 font-semibold text-sm  bg-opacity-50 font-red-hat  2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Braço de 5 funções</span>
              <span className={`bg-cyan-900 font-semibold text-sm bg-opacity-30 font-red-hat 2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Lanternas</span>
              <span className={`bg-cyan-900 font-semibold text-sm bg-opacity-50 font-red-hat 2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Alarmes</span>
              <span className={`bg-cyan-900 font-semibold text-sm bg-opacity-30 font-red-hat 2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Correnteza</span>
              <span className={`bg-cyan-900 font-semibold text-sm bg-opacity-50 font-red-hat 2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Cabo Umbilical</span>
              <span className={`bg-cyan-900 font-semibold text-sm bg-opacity-30 font-red-hat 2xl:text-xl text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Câmeras (Trocar, Controle, Zoom)</span>
            </div>
          </div>
        </div>

        <div className="md:max-w-sm w-full 2xl:max-w-md h-full font-red-hat bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter rounded-lg shadow-lg">
          <Image src="/joystickXbox.png" width={700} height={500} className="object-contain w-full h-64 rounded-t-lg" alt="Joystick" />
          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl  tracking-tight text-[#497284]">Controle de Jogos</h5>

            <div className="flex flex-wrap gap-2">
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-50 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Braço de 7 funções</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Girar Braço</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Pegar Objetos</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-50 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Interagir com Ferramentas</span>
            </div>
          </div>
        </div>

        <div className="md:max-w-sm w-full 2xl:max-w-md h-full bg-white bg-opacity-30 backdrop-blur-sm backdrop-filter rounded-lg shadow-lg">
          <Image src="/joystickPiloto.webp" width={700} height={500} className="object-contain w-full h-64 rounded-t-lg " alt="Joystick" />
          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold 2xl:text-3xl font-red-hat tracking-tight text-[#497284]">Joystick Piloto</h5>

            <div className="flex flex-wrap gap-2">
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-50 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Controle do ROV</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Flutuar</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-50 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Rotacionar</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-30 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Emergir</span>
              <span className={`bg-cyan-900 font-red-hat font-semibold text-sm 2xl:text-xl bg-opacity-50 text-center p-2 backdrop-blur-md backdrop-filter text-white rounded text-xs whitespace-nowrap`}>Submergir</span>
            </div>
          </div>
        </div>







      </div>
    </div>
  );
}