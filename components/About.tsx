import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 pt-28">
      <div className="container mx-auto flex items-center gap-20">
        <div className="w-1/2">
          <div className="relative flex">
            <Image src="/images/profile.png" alt="about" width={600} height={400} className="object-cover shadow-lg float-right z-40 ml-32" />
            <div className="bg-gray-900 absolute right-12 -top-12 w-5/6 h-full"></div>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col justify-center">
          <h2 className="text-4xl text-black flex relative flex-col">
            <span className="block">Hello,</span>
            <span className="block uppercase font-bold z-20">Who am I?</span>
            <div className="bg-primary w-52 absolute left-0 bottom-3 h-3" />
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            <span className="block text-justify">A graphic and motion designer with 8 years of experience in print and digital media. I specialize in creating impactful video content, from explainer videos to short films, using Adobe Creative Suite and 3D modeling software. I also have experience in frontend development, adding to my digital expertise.</span>
            <span className="block text-justify mt-5">Passionate about design as a tool for communication and storytelling, I’m always looking to grow and evolve in my creative career. I’m committed to pushing the boundaries of design and contributing to meaningful visual narratives.</span>
          </p>
          {/* Include the SVG image */}
          <div className="mt-6">
            <Image src="/images/dots.svg" alt="My SVG" width={300} height={200} className="text-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
