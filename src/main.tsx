import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import DashboardLayout from './components/layout/dashboard-layout';
import DashboardHome from './pages/dashboard-home';
import { AppContextProvider } from './contexts/app.context';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className="text-8xl">Hello</h1>,
  },
  {
    path: '/login',
    element: <h1 className="text-8xl">Login</h1>,
  },
  {
    path: '/register',
    element: <h1 className="text-8xl">Register</h1>,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
