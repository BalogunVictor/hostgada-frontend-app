'use client';

import HostHeader from '@components/dashboard/DashboardHeader';
import SideBar from '@components/dashboard/SideBar';
import { ReactNode } from 'react';
import Motion from 'src/layout/motion';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Motion>
      <div className="w-full flex">
        <div className="w-64">
          <SideBar />
        </div>
        <div className="w-full space-y-4">
          <HostHeader />
          <main className="bg-orange-300 h-screen">{children}</main>
        </div>
      </div>
    </Motion>
  );
}

export default Layout;
