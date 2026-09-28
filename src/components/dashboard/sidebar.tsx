import { Pencil } from 'lucide-react';
import PromptHistory from './prompt-history';
import type { TPromptHistory } from '@/shared/types/prompt-history.type';
import { useAppContext } from '@/contexts/app.context';
import { Spinner } from '../ui/spinner';
import { clsx } from 'cn';

const mockItems: TPromptHistory[] = [
  {
    date: 'Today',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/2',
      },
    ],
  },
  {
    date: 'Yesterday',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/2',
      },
    ],
  },
];

export default function Sidebar() {
  const { generatingContext, sidebarOpen } = useAppContext();

  return (
    <nav
      className={clsx(
        ` transition-all duration-300 h-screen  overflow-x-hidden md:w-80 md:border-r md:p-4`,
        sidebarOpen ? 'w-72 p-4 border-r opacity-100' : 'w-0 '
      )}
    >
      {/* Ichki kontent kichrayib ketmasligi uchun min-w beramiz */}
      <div className="w-72 flex flex-col h-full">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-xl font-semibold whitespace-nowrap">AI Writer</h1>
          {generatingContext ? (
            <Spinner data-icon="inline-start" />
          ) : (
            <button
              type="button"
              className="p-1.5 hover:bg-accent rounded-md transition-colors"
            >
              <Pencil size={20} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          <PromptHistory items={mockItems} />
        </div>
      </div>
    </nav>
  );
}
