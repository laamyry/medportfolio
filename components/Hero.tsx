import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-gray-900 text-white flex">
      <div className="relative flex w-full">
        {/* Text container on the left */}
        <div className="flex-1 flex items-center justify-center px-7 absolute top-0 left-0 bottom-0 z-10">
          <div className="  p-8 rounded-lg max-w-lg">
            <h1 className="text-6xl">
              <span className="font-normal">MY NAME IS </span>
              <span className="font-extrabold">MED LAAMYRY</span>
            </h1>
            <p className="uppercase w-fit pr-6 text-xl mt-3 bg-primary text-gray-800 p-3 rounded-tr-full rounded-br-full">i m a graphic & motion design</p>
            <button className="bg-primary px-6 text-gray-800 text-xl py-3 rounded-full mt-4 hover:bg-gray-900 hover:text-white transition ease-in-out duration-500">
              <Link href="#contact" className="hover:text-primary transition ease-in-out duration-500"> Hire Me</Link>
            </button>
          </div>
        </div>
        {/* Image container on the right */}
        <div className="flex-1 relative">
          <Image src="/images/wallpaperflare.jpg" alt="Profile" layout="fill" objectFit="cover" className="absolute top-0 right-0" />
        </div>
      </div>
    </section>
  );
}
