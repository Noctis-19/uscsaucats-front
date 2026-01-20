import { type Message } from '@/lib/types';

export default function Message({ message }: { message: Message }) {
  return (
    <div key={message.id} className="border border-primary rounded-4xl overflow-hidden flex items-stretch">
      <div className="p-2 font-semibold text-white bg-primary flex items-center">{message.nom}</div>
      <div className="p-2">{message.message}</div>
    </div>
  );
}
