"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-dark-1 px-6 py-4 lg:px-10">
      {/* Left: Logo + Title */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo1.png"
          alt="Meetup logo"
          width={32}
          height={32}
          className="object-contain"
        />

        {/* Show title on all screen sizes now */}
        <p className="text-xl font-semibold text-white tracking-tight">
          Prasunet Meet
        </p>
      </Link>

      {/* Right: User + MobileNav (menu icon) */}
      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        {/* Menu button always visible on all screen sizes now */}
        <MobileNav />
      </div>
    </nav>
  );
};
