import React from 'react';
import NavLink from '../ui/NavLink';
import Theme from '../Theme';

const Header = () => {
  return (
    <header className="border-b border-slate-200 dark:border-slate-700 p-4">
      <nav className="container">
        <ul className="flex gap-6">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <div className='fixed top-0 right-20'>
            <Theme />
          </div>
        </ul>
      </nav>
    </header>);
};

export default Header;