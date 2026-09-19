import Sidebar from '@/components/dashboard/sidebar.tsx';
import Navbar from '../dashboard/navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  // console.log(import.meta.env.VITE_GEMINI_API_KEY);
  return (
    <div className=" h-screen overflow-hidden flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-8">
          {' '}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
