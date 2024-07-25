import { Main } from '@/components/Main';
import { Lema } from '@/components/Lema';
import { Industry } from '@/components/Industry';
import { Solutions } from '@/components/Solutions';
import { Clients } from '@/components/Clients';
import { Cases } from '@/components/Cases';
import { Contact } from '@/components/Contact';
import { VirtualADs } from '@/components/VirtualADs';



export default function Home() {
  return (
    <main className="flex flex-col w-full p-0 m-0">
      <Main />
      <VirtualADs />
      <Clients />
      <Lema />
      <Industry />
      <Solutions />
      <Cases />
      <Contact />
    </main>
  );
}
