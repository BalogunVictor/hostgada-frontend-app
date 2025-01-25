'use client';

import {
  AnalyticsNavIcon,
  BookingsNavIcon,
  ClockNavIcon,
  EventsNavIcon,
  HelpNavIcon,
  LogoutNavIcon,
  RatingNavIcon,
  SettingsNavIcon,
  WalletNavIcon,
} from '@asset/icons';
import HostgadaIcon from '@asset/icons/HostgadaIcon';
import HostHeader from '@components/dashboard/DashboardHeader';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import Motion from 'src/layout/motion';
import Pages from 'src/routes/page.routes';

function Layout({ children }: { children: ReactNode }) {
  const [activeLink, setActiveLink] = useState(Pages.hostDashboard);

  const links = [
    { icon: ClockNavIcon, name: 'Dashboard', href: Pages.hostDashboard },
    { icon: EventsNavIcon, name: 'My Events', href: Pages.hostDashboardEvents },
    {
      icon: BookingsNavIcon,
      name: 'Bookings',
      href: Pages.hostDashboardBookings,
    },
    { icon: WalletNavIcon, name: 'Wallet', href: Pages.hostDashboardWallet },
    {
      icon: AnalyticsNavIcon,
      name: 'Analytics',
      href: Pages.hostDashboardAnalytics,
    },
    {
      icon: RatingNavIcon,
      name: 'My Ratings',
      href: Pages.hostDashboardRatings,
    },
    {
      icon: SettingsNavIcon,
      name: 'Settings',
      href: Pages.hostDashboardSettings,
    },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <Motion>
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="hidden fixed inset-0 w-64 2xl:w-80 h-screen sm:flex flex-col shadow-xl bg-white">
          <div className="flex justify-center items-center my-8">
            <Link href="/">
              <HostgadaIcon />
            </Link>
          </div>
          <div className="flex-1">
            <ul>
              {links.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <li className="group relative mr-8" key={link.name}>
                    <Link
                      href={link.href}
                      className={classNames(
                        'flex items-center ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                        {
                          'text-white bg-orange-500': isActive,
                        }
                      )}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <link.icon />
                      <p className="mx-4">{link.name}</p>
                    </Link>
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-500 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>
              <li className="group relative mr-8">
                <Link
                  href="/help"
                  className={classNames(
                    'flex items-center md:ml-4 lg:ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                    {
                      'text-blue-50 bg-orange-600': activeLink === '/help',
                    }
                  )}
                  onClick={() => handleLinkClick('/help')}
                >
                  <HelpNavIcon />
                  <p className="mx-4 block md:hidden lg:block">Help Center</p>
                </Link>
                {activeLink === '/help' && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-600 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                )}
              </li>

              <li className="group relative mr-8">
                <Link
                  href="/logout"
                  className={classNames(
                    'flex items-center md:ml-4 lg:ml-6 px-4 py-3 text-gray-500 rounded mt-2 cursor-pointer transition-colors duration-300',
                    {
                      'text-blue-50 bg-orange-600': activeLink === '/logout',
                    }
                  )}
                  onClick={() => handleLinkClick('/logout')}
                >
                  <LogoutNavIcon />
                  <p className="mx-4 block md:hidden lg:block">Logout</p>
                </Link>
                {activeLink === '/logout' && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-orange-600 transform scale-y-100 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 sm:ml-64 2xl:ml-80 space-y-4">
          <HostHeader />
          <main className="bg-gray-200 w-full h-screen">{children}</main>
        </div>
      </div>
    </Motion>
  );
}

export default Layout;
