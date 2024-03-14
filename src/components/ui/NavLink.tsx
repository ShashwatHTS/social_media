"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, ...rest }:any) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link href={href}{...rest} className={isActive ? 'text-cyan-500' : ""} />
  );
};

export default NavLink;