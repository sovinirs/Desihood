"use client";

import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "@/stores/userStore";
import { Button } from "@/components/button";

export default function Navbar() {
  const { user, loading, signOut } = useUserStore();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b-4 border-foreground bg-white sticky top-0 z-50 flex-shrink-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/51.png" alt="Logo" width={40} height={40} />
        <span className="font-extrabold text-xl tracking-tight">Desihood</span>
      </Link>
      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        {!loading && !user && (
          <>
            <Link href="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          </>
        )}
        {!loading && user && (
          <>
            <Link href="/new-listing">
              <Button variant="primary">New Listing</Button>
            </Link>
            <Link href="/profile">
              <Button variant="secondary">Profile</Button>
            </Link>
            <Link href="/settings">
              <Button variant="default">Settings</Button>
            </Link>
            <Button variant="default" onClick={signOut}>
              Sign Out
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
