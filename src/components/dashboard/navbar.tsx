import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useAppContext } from '@/contexts/app.context';

export default function Navbar() {
  const { toggleSidebar } = useAppContext();

  return (
    <header className="border-b bg-background">
      <nav className="flex items-center justify-between p-4 h-16">
        {/* Chap tomon: Toggle tugmasi va sarlavha */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="block md:hidden text-center"
            onClick={toggleSidebar}
          >
            <Bars3Icon className="w-6 h-6" />
          </Button>
          <h4 className="font-semibold text-lg">Dashboard</h4>
        </div>

        {/* O'ng tomon: Profil dropdown */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" />}>
              Yusuf
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
