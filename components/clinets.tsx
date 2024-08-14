// components/Blog.tsx
import Image from "next/image";

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-black relative flex justify-center ">
          <span className="z-30 uppercase sm:w-96">My Clients</span>
          <div className="mt-6 absolute bottom-20 opacity-10 h-3">
            <Image src="/images/dots.svg" alt="Decorative dots pattern" width={300} height={200} className="text-red-500" />
          </div>
        </h2>
        <div className="mt-20">
          <div className="mt-10 space-x-4 flex justify-center">
            <div className="flex w-36 justify-center">
              <Image src="/images/dadij-logo.svg" alt="Client 1" width={160} height={160} className=""/>
            </div>
            <div className="flex w-36 justify-center">
              <Image src="/images/extinsa-logo.svg" alt="Client 2" width={160} height={160} className=""/>
            </div>
            <div className="flex w-36 justify-center">
              <Image src="/images/marvida-logo.svg" alt="Client 3" width={160} height={160} className=""/>
            </div>
            <div className="flex w-36 justify-center">
              <Image src="/images/wp-logo.svg" alt="Client 4" width={160 } height={160} className=""/>
            </div>
            {/* More client logos */}
          </div>
        </div>
      </div>
    </section>
  );
}
