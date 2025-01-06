import HostgadaIcon from '@asset/icons/HostgadaIcon';
import Link from 'next/link';
import React from 'react';

function SideBar() {
  const links = [
    { icon: <HostgadaIcon />, link: '', href: '/dashboard/host' },
    { icon: <HostgadaIcon />, link: '', href: '/dashboard/host' },
  ];

  console.log(links);
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center">
        <Link className="my-4" href="/">
          <HostgadaIcon />
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
