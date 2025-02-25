import { useEffect, useState } from 'react';
import DelayedTitle from './delayedTitle';
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({
    weight: "400",
    subsets: ["latin"]
});

export default function Welcome() {
    const [showTitle, setShowTitle] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const titleTimer = setTimeout(() => setShowTitle(true), 2000);
        const subtitleTimer = setTimeout(() => setShowSubtitle(true), 3000);
        const arrowTimer = setTimeout(() => setShowArrow(true), 4000); 

        return () => {
            clearTimeout(titleTimer);
            clearTimeout(subtitleTimer); 
            clearTimeout(arrowTimer);
    };
}, []);

    return (
        <div className="relative w-full h-screen flex justify-center items-center bg-mainbg">
            <div className="relative z-10 text-center mt-60">
                <h1 className={`text-6xl md:text-7xl font-bold mb-2 py-1 px-1 text-textclr-s overflow-hidden border-r-4 border-textclr-s whitespace-nowrap animate-typewriter ${showTitle ? 'typewriter-animation' : ''}`}>
                    Can Kara
                </h1>
                <DelayedTitle className="text-2xl md:text-3xl mb-8 text-textclr-x overflow-hidden whitespace-nowrap">
                    <span className={dancing_script.className}>
                        <span className='text-3xl md:text-4xl'>Cybersecurity Engineer<br/>Fullstack Developer<br/>Chemoinformatiker</span>
                    </span>
                </DelayedTitle>
                <DelayedTitle>
                    <a href="#about" className="inline-flex items-center px-6 py-3 bg-blue-600 text-textclr-x text-lg font-medium rounded transition">
                        <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </DelayedTitle>
            </div>
        </div>
    );
}
