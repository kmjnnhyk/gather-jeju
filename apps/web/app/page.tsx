import ClientSide from './Clientside';
import { trpc } from './trpc';

export default async function Home() {
  const response = await trpc.hello.query({ name: 'jinhyeok' });
  return (
    <div>
      {response}
      <ClientSide />
    </div>
  );
}
