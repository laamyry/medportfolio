"use client"; // Ensure this is a client component
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll smoothly to the target section
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className=" flex justify-center">
      <nav className="bg-gray-950 text-white py-4 fixed top-0 left-0 w-full z-50 bg-opacity-80 sm:flex sm:flex-col sm:w-screen">
        <div className=" mx-auto flex justify-between items-center sm:px-0 px-16 3xl:px-48">
          <Link href="#home" className="sm:hidden">
            <Image src="/images/header-logo.svg" alt="Logo" className="mx-auto w-40" width={80} height={80} />
          </Link>
          <div className="space-x-6 uppercase text-base">
            <Link href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-primary transition ease-in-out duration-500">
              Home
            </Link>
            <Link href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-primary transition ease-in-out duration-500">
              About
            </Link>
            <Link href="#works" onClick={(e) => handleScroll(e, "#works")} className="hover:text-primary transition ease-in-out duration-500">
              Works
            </Link>
            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-primary transition ease-in-out duration-500">
              contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
