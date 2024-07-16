import { Main } from '@/components/Main';
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
    </main>
  );
}
