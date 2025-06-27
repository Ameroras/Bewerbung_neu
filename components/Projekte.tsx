import { ProjektKarte } from "./Shared/ProjektKarte";
import { Section } from "./Shared/Section";

// Elemente in der projektListe(Array) sind Strings der Dateinamen aus dem /public
const wetter_images = [
    "wetter_1.png",
    "wetter_2.png",
    "wetter_3.png",
    "wetter.jpg",
];
const fun_images = ["fun_1.png", "fun_2.png", "fun_3.png"];
const ihk_images = ["IHK_1.png", "IHK_2.png", "IHK_3.png", "IHK_4.png"];
const musik_images = [
    "musik_1.png",
    "musik_2.jpg",
    "musik_3.png",
    "musik_4.png",
    "musik_thumg.png",
];

const projektListe = [
    {
        thumb: "fun.jpg",
        imgs: fun_images,
        git_url: "https://github.com/AmerorasWorks/API_Projektwoche",
        subtitle: "A tiny Fun-App for Fun Facts",
    },
    {
        thumb: "wetter.jpg",
        imgs: wetter_images,
        git_url:
            "https://github.com/AmerorasWorks/Paxsisprojekt_-Visualliesierungen",
        subtitle: "Wetterapp",
    },
    {
        thumb: "IHK_thumb.png",
        imgs: ihk_images,
        git_url: "https://github.com/Ameroras/IHK_Pruefung",
        subtitle: "IHK-Prüfung",
    },
    {
        thumb: "musik_thumb.png",
        imgs: musik_images,
        git_url:
            "https://github.com/AmerorasWorks/Paxsisprojekt_-Visualliesierungen",
        subtitle: "Musikapp",
    },
];

export const Projekte = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-4 bg-slate-800 shadow-lg border border-slate-600">
                <p className="text-4xl pb-2"> Projekte(Work in Progress)</p>
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <a
                    href="mailto:ratzmer.d86@gmail.com"
                    className="px-6 font-semibold py-3 bg-red-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-neutral-200 text-center rounded-lg transition">
                    Kontaktieren sie mich hier
                </a>
            </div>
        </>
    );
};
