import { ProjektKarte } from "./Shared/ProjektKarte";
import { Section } from "./Shared/Section";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

// Elemente in der projektListe(Array) sind Strings der Dateinamen aus dem /public

const fun_images = [
    { src: "fun.jpg", caption: "coming soon" },
    { src: "fun.jpg", caption: "coming soon" },
    { src: "fun.jpg", caption: "coming soon" },
    { src: "fun.jpg", caption: "coming soon" },
];
const ihk_images = [
    {
        src: "IHK_6.png",
        caption:
            "Die Projektbeschreibung / der Auftrag für unsere IHK- Prüfung mit Beispieldaten eines Fitnesstudios",
    },
    {
        src: "IHK_5.png",
        caption:
            "Zunächst wurden die Daten über PowerBi die Daten Bereinigt und 'in Form' gebracht um die wieter Arbeit zu erleichtern",
    },
    {
        src: "IHK_2.png",
        caption:
            "Anschliessend wurden mit dem Mircrosoft-Tool 'KNIME', verschiedene ML-Modelle erstellt und anschliessend mit einer 'Base-Line' verglichen.",
    },
    {
        src: "IHK_3.png",
        caption:
            "So konnten wir klar erkennen welches Modell wir anwenden müssen, um möglichst zuverlässig eine Kundenabwanderung vorhersagen zu können. In diesem Fall war es die Logische Regression (LR) mit nur 7,12% Mean-Error",
    },
    {
        src: "IHK_1.png",
        caption:
            "Mit weiterne Analysen wie z.B einer Korrelationsmatrix konnten wir dem IHK-Prüfer die Daten während unserer Präsentation gut erklären ",
    },
    {
        src: "IHK_4.png",
        caption:
            "Dieses interative PowerBi-Dashboard hilft uns über verschiedene Filter, Nutzergruppen und deren stärksten Einflussfaktoren gegen eine Kündigung besser zu erkennen. ",
    },
];

const RZ_images = [
    {
        src: "RZ_thumb.png",
        caption:
            "Die Projektbeschreibung / der Auftrag für unsere Praxisprojektwochen bei dem ehrenamtichen Verein 'Redezeit'",
    },
    {
        src: "RZ_5.png",
        caption:
            "Zunächst haben wir uns im Googel-Looker-Studio über das Developer-Tool angeschaut in welchem 'Div'- Container, welche Daten zu erhalten sind.",
    },
    {
        src: "RZ_4.png",
        caption:
            "Den Webscraper haben wir dann mit Streamlit umgesetzt, nachdem klar war, welche (Daten-)Container angesprochen werden müssen",
    },
    {
        src: "RZ_1.png",
        caption:
            "Nach diversen Analysen in einem Jupiternotebook entstand dann dieses Power-Bi Dashhboard, was auf der ersten Seite allgemeine Informationen und Daten anzeigt.",
    },
    {
        src: "RZ_2.png",
        caption:
            "Auf der zweien Berichtsseiten haben wir die Ausreisser ermittelt und diese um sie herzuleiten, globalen Ereignissen gegenübergestellt.",
    },
    {
        src: "RZ_3.png",
        caption:
            "Auf der dritten Seite glänzen die Top 10 Nutzerverläufe mit Filterfunktionen",
    },
];

const projektListe = [
    {
        thumb: "fun.jpg",
        imgs: fun_images,
        git_url: "https://github.com/AmerorasWorks/API_Projektwoche",
        subtitle: "Eine kleine App für täglich zufällige Fun-Facts",
    },
    {
        thumb: "IHK_4.png",
        imgs: ihk_images,
        git_url: "https://github.com/Ameroras/IHK_Pruefung",
        subtitle: "IHK-Prüfung",
    },
    {
        thumb: "RZ_thumb.png",
        imgs: RZ_images,
        git_url: "https://github.com/AmerorasWorks/Redezeit-Analyse",
        subtitle: "Praxisprojekt mit 'Redezeit'",
    },
    {
        thumb: "Ihr_projekt_thumb.png",
        imgs: RZ_images,
        git_url: "https://github.com/AmerorasWorks/Redezeit-Analyse",
        subtitle: "Platzhalter",
    },
];

export const Projekte = () => {
    return (
        <>
            <div className="text-white w-full flex flex-col gap-4 bg-slate-800 shadow-lg">
                <div className="flex items-center gap-3 px-4 pt-4">
                    {/* GitHub Icon-Button */}
                    <a
                        href="https://github.com/Ameroras"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-indigo-800 ">
                        <span className="text-4xl">GitHub -</span>
                        <FaGithub size={62} />
                    </a>

                    {/* Überschrift */}
                    <p className="text-4xl pb-2">Projekte mit Bildergalerie</p>
                </div>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
                        {projektListe.map((lnk, idx) => {
                            return (
                                <ProjektKarte
                                    imageSet={lnk.imgs}
                                    url={lnk.thumb}
                                    key={idx}
                                    git_url={lnk.git_url}
                                    subtitle={lnk.subtitle}
                                />
                            );
                        })}
                    </div>
                </Section>
                <Section>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="mailto:ratzmer.d86@gmail.com"
                            className="flex items-center gap-2 px-6 font-semibold py-3 bg-red-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-neutral-200 text-center rounded-lg transition">
                            Kontaktieren Sie mich hier direkt via Mail
                            <HiOutlineMail size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dorian-ratzmer"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 font-semibold py-3 bg-blue-700/90 hover:bg-blue-800/90 backdrop-blur shadow shadow-blue-700/90 text-white text-center rounded-lg transition">
                            oder via PN bei LinkedIn
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/Ameroras"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 font-semibold py-3 bg-indigo-800 hover:bg-indigo-600/90 backdrop-blur shadow shadow-blue-700/90 text-white text-center rounded-lg transition">
                            <span className="text">GitHub Profil</span>
                            <FaGithub size={24} />
                        </a>
                    </div>
                </Section>
            </div>
        </>
    );
};
