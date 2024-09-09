import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div>
        <div className="p-20 flex flex-col bg-[#1e1919] dark:bg-slate-800 text-white space-y-10 items-center justify-center">
          <h1 className="text-5xl font-medium text-center max-w-2xl">
          Join over 700 million registered users who trust Dropbox
          </h1>
          <p className="text-center font-light max-w-2xl">
          Easy to use, reliable, private, and secure. It’s no wonder Dropbox is the choice for storing and sharing your most important files.
          </p>
          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-6 w-fit text-gray-900 font-bold rounded-xl"> 
            Get Started now
            <ArrowRight className="ml-6" />
          </Link>
        </div>

        <div>
          <video autoPlay loop muted className="rounded-lg">
            <source 
              src="/hero_video.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <p className="text-center font-bold text-xl pt-20">
        Disclaimer
      </p>
      <p className="text-center font-light p-2 max-w-2xl text-center mx-auto pb-10">
        We do not own or affiliate with Dropbox or/and any of its subsidiaries in any form. Copyright Disclaimer under section 107 of the Copyright Act 1975, allowance is made for "fair use" of this content for education purposes.
      </p>
    </main>
  );
}
