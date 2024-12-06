"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
            <span>
              <Image
                src="/img/ecoconnect-logo.png"
                width="128"
                alt="ECOCONNECT logo"
                height="128"
                className="w-12 rounded-lg mr-2"
              />
            </span>
            <span className="font-bold text-xxl">ECOCONNECT</span>
          </span>
        </Link>

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="#contact"
              className="px-6 py-2 text-white bg-primary rounded-md md:ml-5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
