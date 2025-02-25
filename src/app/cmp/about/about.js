import Image from "next/image";
import Can from "../../../../public/Can.jpg"
import Python from "../../../../public/icons/grey/python.png"
import Rust from "../../../../public/icons/grey/rust.png"
import Svelte from "../../../../public/icons/grey/svelte.png"
import MariaDB from "../../../../public/icons/grey/mariadb.png"
import Git from "../../../../public/icons/grey/git.png"
import Docker from "../../../../public/icons/grey/docker.png" 

export default function About() {
    return (
        <div id="about" className="w-full my-8 justify-center items-center relative bg-mainbg">
            <div className="flex flex-col items-center space-y-8 px-8">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
                    <div>
                        <h1 className="uppercase text-3xl md:text-5xl text-textclr-s">Über mich</h1>
                        <br/>
                        <p className="max-w-2xl p-2 m-0 text-xl md:text-2xl leading-tight text-textclr-x tracking-wide">
                            Hey, ich bin Can! Schon seit meinem 9. Lebensjahr begeistere ich mich für Informatik und IT-Sicherheit.<br/>
                            Genauso früh habe ich begonnen, mir meine ersten Programmiersprachen anzueignen und meine ersten Projekte in der Softwareentwicklung zu realisieren.<br/>
                            Im Laufe der Jahre habe ich auch ein Interesse an Chemie und Biologie entwickelt und diese schließlich mit meiner Expertise in der IT verbunden.
                        </p>
                    </div>
                    <div className="m-8 rounded-lg shadow-2xl flex justify-center items-center">
                        <Image
                        src={Can}
                        width={250}
                        className="rounded-lg md:w-[250px] w-[200px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen pt-24">
                <h1 className="text-center text-textclr-s text-4xl mb-8">TECHSTACK</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-6xl">
                    <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={Python}
                            alt="Logo"
                            width={80}
                            height={80}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl text-textclr-s font-bold mt-4">Python</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">High Level</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Python war meine erste High Level Programmiersprache, und somit auch die mit der ich die meisten Erfahrungen habe. Mit Frameworks und Bibliotheken wie Numpy, PyTorch und Matplotlib ist die Sprache über die Jahre für mich zur Nummer 1 geworden, wenn es um Data Science geht.
                        </p>
                        </div>
                        <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={Rust}
                            alt="Logo"
                            width={80}
                            height={80}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl font-bold mt-4 text-textclr-s">Rust</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">Low Level</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Natürlich muss man auch etwas tiefer gehen. Nachdem ich mich mit C vertraut habe, habe ich Rust entdeckt. Die Flexibilität und Funktionen der Sprache haben mich direkt beeindruckt. Und wenn ich eine stabile und leistungsstarke Software schreiben muss, ist es die erste Sprache, die mir in die Gedanken kommt.
                        </p>
                        </div>
                        <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={Svelte}
                            alt="Logo"
                            width={75}
                            height={75}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl font-bold mt-4 text-textclr-s">Svelte</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">Web Framework</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Svelte revolutioniert und bereichert die Webentwicklung. Für meine interaktiven und responsiven Multipage-Seiten war mir die letzten Jahre kein anderes JavaScript-Framework so hilfreich. In Kombination mit Tailwind waren die Ergebnisse stets beeindruckend.
                        </p>
                        </div>
                        <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={MariaDB}
                            alt="Logo"
                            width={80}
                            height={80}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl font-bold mt-4 text-textclr-s">MariaDB</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">Datenbank</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Daten. So eine schöne Sache. Um die großen Mengen an Daten, die bei meinen Projekten aufkommen, übersichtlich zu kontrollieren, nutze ich den beliebten MySQL-Fork MariaDB für maximale Leistung und Sicherheit.
                        </p>
                        </div>
                        <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={Git}
                            alt="Logo"
                            width={75}
                            height={75}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl font-bold mt-4 text-textclr-s">Git</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">Versionskontrolle</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Mit Git kann ich meinen Code effizient verwalten, Änderungen nachvollziehen und in Teams reibungslos zusammenarbeiten. Ein unverzichtbares Werkzeug, um Fehler rückgängig zu machen und die Kontrolle über meinen Fortschritt zu behalten.
                        </p>
                        </div>
                        <div className="flex flex-col items-center bg-secbg p-4 shadow-md rounded-lg">
                        <Image
                            src={Docker}
                            alt="Logo"
                            width={80}
                            height={80}
                            className="filter grayscale hover:grayscale-0 duration-500"
                        />
                        <h2 className="text-xl font-bold mt-4 text-textclr-s">Docker</h2>
                        <h3 className="text-md font-semibold mt-2 text-textclr-x">Container</h3>
                        <p className="text-center mt-2 text-textclr-s">
                            Mit Docker konnte ich meine Entwicklungsumgebungen effizienter und reproduzierbarer gestalten. Es erleichtert mir das Erstellen, Bereitstellen und Ausführen von Anwendungen in Containern, was besonders bei komplexen Projekten von Vorteil ist.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}