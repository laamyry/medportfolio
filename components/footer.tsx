import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 pt-6">
      <div className="container mx-auto text-center text-white relative">
        <Image src="/images/footer-logo.svg" alt="Med Laamyry's Portfolio Logo" className="mx-auto mb-10 w-18" width={80} height={80} />

        <div className="flex justify-center space-x-10 text-lg">
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} aria-hidden="true" />
            <p>contact@medlaamyry.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone size={20} aria-hidden="true" />
            <p>+212 619 367 728</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-6">
          <Link href="https://twitter.com/medlaamyry" target="_blank" rel="noopener noreferrer" aria-label="Follow Med Laamyry on Twitter">
            <FaTwitter size={30} />
          </Link>
          <Link href="https://linkedin.com/in/medlaamyry" target="_blank" rel="noopener noreferrer" aria-label="Connect with Med Laamyry on LinkedIn">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://github.com/laamyry" target="_blank" rel="noopener noreferrer" aria-label="View Med Laamyry's GitHub profile">
            <FaGithub size={30} />
          </Link>
        </div>

        <div className="mt-10 bg-gray-950 py-4">
          <p>
            &copy; 2024 <span className="text-primary">Med Laamyry</span>. All rights reserved.
          </p>
        </div>

        <div className="mt-6 absolute bottom-40 opacity-10 h-3">
          <Image src="/images/dots.svg" alt="Decorative dots" width={300} height={200} />
        </div>
        <div className="absolute right-0 -top-44 opacity-10 h-3">
          <Image src="/images/dots-cercle.svg" alt="Decorative circle of dots" width={300} height={200} />
        </div>
      </div>
    </section>
  );
}
