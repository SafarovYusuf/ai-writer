import { Pencil } from 'lucide-react';
import PromptHistory from './prompt-history';
import type { TPromptHistory } from '@/shared/types/prompt-history.type';
import { useAppContext } from '@/contexts/app.context';
import { Spinner } from '../ui/spinner';
import { clsx } from 'cn';
import { useContentContext } from '@/contexts/content.context';

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
  const { sidebarOpen } = useAppContext();
  const { generatingContext } = useContentContext();

  return (
    <nav
      className={clsx(
        ` transition-all duration-300 h-screen  overflow-x-hidden md:w-80 md:border-r md:p-4`,
        sidebarOpen ? 'w-1/2 p-2 border-r ' : 'w-0 '
      )}
    >
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-semibold ">AI Writer</h1>
        {generatingContext ? (
          <Spinner data-icon="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <button>
            <Pencil className="w-6 h-6" />
          </button>
        )}
      </div>

      <PromptHistory items={mockItems} />
    </nav>
  );
}
