/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthProps {
  children: React.ReactNode;
}

const layout = ({ children }: AuthProps) => {
  const pathName = usePathname();
  return (
    <main className="bg-sky-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4 ">
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={2}
            className="h-12 flex items-center "
          />
          <Button variant="secondary">
            <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathName === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex justify-center items-center flex-col pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
