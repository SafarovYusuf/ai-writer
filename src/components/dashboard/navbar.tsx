import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function Navbar() {
  return (
    <div className="border-b">
      <nav className="flex items-center justify-between p-4 h-16">
        <h4 className="font-semibold">Dashboard</h4>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Yusuf</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
