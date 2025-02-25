import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-mainbg text-textclr-s py-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center">
                    <p>&copy; 2025 Can Kara</p>
                </div>
                <div className="flex justify-center md:justify-center items-center">
                    <Link href="/sites/impressum" className="hover:opacity-75">
                            Impressum
                    </Link>
                </div>
                <div className="flex justify-center md:justify-center items-center">
                    <Link href="/sites/datenschutz" className="hover:opacity-75">
                        Datenschutz
                    </Link>
                </div>
                <div className="flex justify-center md:justify-end items-center space-x-4">
                    <a href="mailto:kontakt@can-kara.de" target="_blank" rel="noopener noreferrer" className="text-textclr-s hover:opacity-75">
                        <FiMail size={20} />
                    </a>
                    <a href="https://github.com/can-kara95" target="_blank" rel="noopener noreferrer" className="text-textclr-s hover:opacity-75">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/can-kara-4139192b7/" target="_blank" rel="noopener noreferrer" className="text-textclr-s hover:opacity-75">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/can_kara.jpg/" target="_blank" rel="noopener noreferrer" className="text-textclr-s hover:opacity-75">
                        <FiInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
