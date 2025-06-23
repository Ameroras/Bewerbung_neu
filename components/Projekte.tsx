import { ProjektKarte } from "./ProjektKarte";
import { Section } from "./Section";

// Elemente in der projektListe(Array) sind Strings der Dateinamen aus dem /public
const wetter_images = ["wetter_1.png", "wetter_2.png", "wetter_3.png"];
const fun_images = ["fun_1.png", "fun_2.png", "fun_3.png"];
const projektListe = [
    {
        thumb: "fun.jpg",
        imgs: fun_images,
        git_url: "https://github.com/systm-spec/resume_boiler",
    },
    {
        thumb: "wetter.jpg",
        imgs: wetter_images,
        git_url: "https://github.com/systm-spec/resume_boiler",
    },
];

export const Projekte = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-4">
                <p className="text-4xl pb-2"> Projekte</p>
                <Section>
                    <div className="grid grid-cols-2 gap-6">
                        {projektListe.map((lnk, idx) => {
                            return (
                                <ProjektKarte
                                    imageSet={lnk.imgs}
                                    url={lnk.thumb}
                                    key={idx}
                                    git_url={lnk.git_url}
                                />
                            );
                        })}
                    </div>
                </Section>
                <a
                    href="mailto:schmutz@gmail.com"
                    className="px-6 font-semibold py-3 bg-indigo-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-neutral-200 text-center rounded-lg transition">
                    Jetzt kontaktieren
                </a>
            </div>
        </>
    );
};
