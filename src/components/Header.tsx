'use client';

import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { SideDrawer } from '@ui/SideDrawer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import { HostgadaLogo } from 'src/assets/images';
import Pages from 'src/routes/page.routes';

function Header() {
  const Links = [
    { name: 'Home', href: Pages.homePage },
    { name: 'Discover', href: Pages.discover },
    { name: 'Bookings', href: Pages.bookings },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="w-full text-p1 bg-white rounded-full">
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={HostgadaLogo} alt="logo" className="w-24 max-sm:w-20" />
          </Link>
          <div className="lg:flex space-x-4 max-lg:hidden">
            {Links.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="transition-all duration-500 ease-in-out mt-1">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <span className="lg:hidden" onClick={toggleSidebar}>
          <HiMenuAlt4 className="text-orange-700" />
        </span>

        <div className="lg:flex space-x-4 max-lg:hidden w-[330px]">
          <Input
            rounded
            intent="fill"
            placeholder="Search..."
            leftIcon={<IoSearch className="text-orange-900" />}
            rightIcon={<VscSettings />}
          />
        </div>

        <div className="lg:flex items-center space-x-4 max-lg:hidden">
          <Link href={Pages.hostpeople}>
            <span className="transition-all duration-500 ease-in-out mt-1">
              Host people
            </span>
          </Link>
          <Link href={Pages.login}>
            <span className="transition-all duration-500 ease-in-out mt-1">
              Log in
            </span>
          </Link>
          <Link href={Pages.signup}>
            <Button size="lg" kinds="tertiary">
              {' '}
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Sidebar for Small Screens */}
        <SideDrawer
          open={sidebarOpen}
          onClose={toggleSidebar}
          position="right" // or "right"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-white text-p1 mx-2 mt-10">
            <div className="flex flex-col gap-4">
              <Link href={Pages.signup}>
                <Button size="lg" kinds="tertiary">
                  {' '}
                  Sign Up
                </Button>
              </Link>
              <Link href={Pages.login}>
                <span className="transition-all duration-500 ease-in-out mt-1">
                  Log in
                </span>
              </Link>
              <Link href={Pages.hostpeople}>
                <span className="transition-all duration-500 ease-in-out mt-1">
                  Host people
                </span>
              </Link>
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span className="transition-all duration-500 ease-in-out mt-1">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SideDrawer>
      </nav>
    </header>
  );
}

export default Header;
