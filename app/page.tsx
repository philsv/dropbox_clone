import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div>
        <div className="p-20 flex flex-col bg-[#1e1919] dark:bg-slate-800 text-white space-y-10 items-center justify-center">
          <Link href="https://github.com/philsv/dropbox_clone" className="flex cursor-pointer bg-blue-500 p-1 rounded-full w-fit text-white text-sm font-bold items-center justify-center space-x-2 px-4 py-2 underline text-center">
            This is a Dropbox clone for educational purposes only
          </Link>

          <h1 className="text-5xl font-medium text-center max-w-2xl">
            Securely collaborate on <br />your content anywhere, <br />anytime
          </h1>
          <p className="text-center font-light max-w-2xl">
            With Dropbox, you get a full suite of tools designed to help you create, share, manage and track content more efficiently. Plus, proven cloud storage you can trust.
          </p>
          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-6 w-fit text-black font-bold">
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
