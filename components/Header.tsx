import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignUpButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from '@/components/ThemeToggler'
import { ArrowRight } from 'lucide-react'

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2 cursor-pointer">
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
        <h1 className="font-light">Why Dropbox?</h1>
        <h1 className="font-light">Products</h1>
        <h1 className="font-light">Solutions</h1>
        <h1 className="font-light">Pricing</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <h1 className="font-light">Contact</h1>
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignUpButton afterSignUpUrl='/dashboard' mode="modal" />
          <SignInButton afterSignInUrl='/dashboard' mode="modal">Log in</SignInButton>
        
        <Link
          href="/dashboard"
          className="flex cursor-pointer bg-blue-500 p-2 w-fit text-white text-sm font-bold items-center justify-center space-x-2 px-4 py-2"
        >
          Get Started
          <ArrowRight className="ml-6" />
        </Link>
      </SignedOut>
      </div>
    </header>
  )
}

export default Header