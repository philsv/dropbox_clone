'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, SignUpButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from '@/components/ThemeToggler';
import { ArrowRight } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="/dropbox_logo.png"
            alt="logo"
            className="invert"
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
        <div className="hidden md:flex space-x-2">
          <h1 className="font-light">Products</h1>
          <h1 className="font-light">Solutions</h1>
          <h1 className="font-light">Enterprise</h1>
          <h1 className="font-light">Pricing</h1>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`px-5 flex space-x-2 items-center ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-2`}>
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignUpButton afterSignUpUrl='/dashboard' mode="modal" />
          <SignInButton afterSignInUrl='/dashboard' mode="modal">Login</SignInButton>
        </SignedOut>
        <Link
          href="/dashboard"
          className="flex cursor-pointer bg-[#0061fe] p-2 w-fit text-white text-sm font-bold items-center justify-center space-x-2 px-4 py-2 rounded-xl"
        >
          Get Started
          <ArrowRight className="ml-6" />
        </Link>
      </div>
    </header>
  );
}

export default Header;