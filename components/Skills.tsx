import { Chip } from "./Shared/Chip";
import { Section } from "./Shared/Section";

const skills = [
    "Organisation",
    "Kommunikation",
    "Empathie",
    "Verantwortung",
    "Resilienz",
    "Storytelling",
    "Flexibilität",
    "Lifelong Learner",
    "Hands-on Mentalität",
];
export const Skills = () => {
    return (
        <>
            <div className="text-white w-full px-3 py-4 rounded-xl flex flex-col gap-2 bg-slate-800 shadow-lg border border-slate-600">
                <Section>
                    <p className="text-4xl pb-2"> Meine Fähigkeiten</p>
                    <div className=" grid text-sm md:text-base grid-cols-3 gap-1.5">
                        {skills.map((itm, idx) => {
                            return <Chip key={itm + idx} label={itm} />;
                        })}
                    </div>
                </Section>

                <Section>
                    <p className="text-4xl pt-2 pb-3"> Abschlüsse </p>
                    <p>
                        Mittelpunktschule Oberer Hüttenberg Kirch-Göns, 2001 -{" "}
                        <b>Hauptschulabschluss</b>
                    </p>
                    <p>
                        Geb. Nikolaus GmbH Gießen, 2001-2004 –{" "}
                        <b>Maler und Lackierer</b>
                    </p>
                    <p>
                        Realschule West Gießen, 2006 – <b>Realschulabschluss</b>
                    </p>
                    <p>
                        Data Craft Academy 2024-2025 -{" "}
                        <b>IHK-Zertifizierter Data Analyst</b>
                    </p>
                </Section>
                <Section>
                    <p className="text-4xl pt-2 pb-3"> Sprachen </p>
                    <p>Deutsch, Muttersprache</p>
                    <p>Englisch (B2)</p>
                </Section>
            </div>
        </>
    );
};
