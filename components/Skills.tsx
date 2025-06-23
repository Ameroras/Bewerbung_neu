import { Chip } from "./Chip";
import { Section } from "./Section";

const skills = [
    "Orga",
    "Kommunikation",
    "Empathie",
    "Verantwortungsbewusstsein",
    "Resilienz",
    "Storytelling",
    "Flexibilität",
    "Lifelong Learner",
    "Hands-on Mentalität",
];
export const Skills = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-4">
                <Section>
                    <p className="text-4xl pb-2"> Berufserfahrung</p>
                    <div className=" grid grid-cols-3 gap-1.5">
                        {skills.map((itm, idx) => {
                            return <Chip key={itm + idx} label={itm} />;
                        })}
                    </div>
                </Section>

                <Section>
                    <p className="text-4xl pt-2 pb-3"> Ausbildung </p>
                    <p>
                        <b>Realschule West Gießen, 2001</b> – Realschulabschluss
                    </p>
                    <p>
                        <b>Geb. Nikolaus GmbH Gießen, 2001-2004</b> – Maler und
                        Lackierer
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
