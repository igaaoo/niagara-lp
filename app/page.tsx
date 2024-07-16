import { Controls } from '@/components/Controls';
import { Main } from '@/components/Main';
import { Setup } from '@/components/Setup';
import { Missions } from '@/components/Missions';
import { Lema } from '@/components/Lema';
import { Industry } from '@/components/Industry';
import { Solutions } from '@/components/Solutions';
import { Clients } from '@/components/Clients';



export default function Home() {
  return (
    <main className="flex flex-col w-full p-0 m-0">

      <Main />
      <Lema />
      <Industry />
      <Solutions />
      <Clients />
      {/* <div className='h-8 bg-blue-900 backdrop-blur-lg z-10 blur-sm -mt-4 -mb-2 bg-opacity-30  '></div> */}
      {/* <Setup />
      <div className='h-8 bg-cyan-600 backdrop-blur-lg z-10 blur-md -mt-4 -mb-2 bg-opacity-30  '></div>
      <Missions />
      <div className='h-8 bg-[#497284] backdrop-blur-lg z-10 blur-md -mt-4 -mb-2 bg-opacity-30  '></div>
      <Controls /> */}
    </main>
  );
}
