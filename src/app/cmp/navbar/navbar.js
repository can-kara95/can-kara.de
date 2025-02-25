import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '../../../../public/Logo_cropped.png'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 transition-all bg-mainbg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
            src={Logo}
            alt='Can Kara'
            width={150}
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link href="/#about" className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-textclr-s hover:opacity-75">
                Über mich
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a href="mailto:kontakt@can-kara.de" target="_blank" rel="noopener noreferrer" className="text-textclr-s mx-2 hover:opacity-75">
            <FiMail size={20} />
          </a>
          <a href="https://github.com/can-kara95" target="_blank" rel="noopener noreferrer" className="text-textclr-s mx-2 hover:opacity-75">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/can-kara-4139192b7/" target="_blank" rel="noopener noreferrer" className="text-textclr-s mx-2 hover:opacity-75">
            <FiLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/can_kara.jpg/" target="_blank" rel="noopener noreferrer" className="text-textclr-s mx-2 hover:opacity-75">
            <FiInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
