"use client";
import Image from "next/image";
import { HoverChip } from "./Shared/HoverChip";
import MyChart from "./recharts/MyChart";
import { FaLinkedin } from "react-icons/fa";

const labels = ["Python", "Power BI", "SQL", "Excel", "PM-Tools", "Teamplay"];
const skills = [
    [
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Regex",
        "Jupyter Notebook",
        "Web Scraping",
        "API-Anbindung",
        "Arbeiten mit JSON",
        "Arbeiten mit Datumswerten",
        "Virtual Environments",
        "Paketmanagemen",
    ],
    [
        "Dashboard Design",
        "DAX",
        "Power Query",
        "Tabellenbeziehungen",
        "Datenmoddelierug",
        "KPI_Visualisierung",
        "Dynamische Visuals",
        "Datenbereinigung",
    ],
    [
        "Joins",
        "Aggregationen",
        "SELECT_Abfragen",
        "WHERE_Klauseln",
        "GROUP BY",
        "Normalisierung",
        "Datentypen",
    ],
    [
        "Pivot Tabellen",
        "Power Query",
        "Verzweigungen",
        "Schleifen",
        "Visualisierung",
        "Formeln",
        "SVERWEIS",
        "INDEX",
        "Dynamische Bereiche",
        "Bedingte Formatierung",
    ],
    [
        "Gantt_Diagramme",
        "Priorisierungsmethoden",
        "Teamrollen",
        "Verantwortlichkeiten",
        "Ressourcenmanagement",
        "Projektzieldefinition",
        "Risikoanalyse",
        "Projektstatusberichte",
    ],
    [
        "Kommunikationsfähigkeit",
        "Kooperationsbereitschaft",
        "Verlässlichkeit",
        "Empathie",
        "Kritikfähigkeit",
        "Lösungsorientiert",
        "Anpassungsfähig",
    ],
    "Interdisziplinäre Zusammenarbeit",
];

export const Hero = () => {
    return (
        <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-6 bg-slate-800 shadow-lg border border-slate-600">
            <div className="font-bold text-4xl">Dorian Ratzmer</div>
            <p className="italic py-1">
                IHK-zertifizierter Datenanalyst - Python, SQL, Power BI
            </p>

            {/* Oberer Bereich: zwei Spalten nebeneinander */}
            <div className="flex flex-col md:flex-row w-full justify-center px-2">
                {/* Linke Spalte */}
                <div className="flex flex-col w-full md:flex-row gap-4">
                    {/* Profilbild */}
                    <Image
                        src="/Bewerbungsfoto.jpg"
                        className="rounded-4xl"
                        width={250}
                        height={200}
                        alt="Bewerbungsfoto"
                    />

                    {/* Skillset und Zertifikate */}
                    <div className="flex flex-col gap-4 px-2">
                        <div>
                            <p className="font-bold text-2xl pb-3">Skillset:</p>
                            <div className="grid grid-cols-3 gap-1">
                                {labels.map((val, idx) => (
                                    <HoverChip
                                        skills={skills[idx]}
                                        key={val + idx}
                                        label={val}
                                    />
                                ))}
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-center gap-0">
                            <Image
                                src="/cert.png"
                                className="rounded-4xl"
                                width={250}
                                height={200}
                                alt="IHK Zertifikat 1"
                            />
                            {/* <Image
                                src="/cert.png"
                                className="rounded-4xl"
                                width={250}
                                height={200}
                                alt="IHK Zertifikat 2"
                            /> */}
                        </div>
                    </div>
                    {/* Rechte Spalte: Radar-Chart */}
                    <div className="">
                        <MyChart />
                    </div>
                </div>
            </div>

            {/* Was mich ausmacht */}
            <div>
                <p className="text-3xl py-3">Was mich ausmacht</p>
                <p>
                    Ich bringe langjährige Erfahrung in der persönlichen
                    Assistenz mit – geprägt von{" "}
                    <b>Verantwortungsbewusstsein, Kommunikationsstärke</b> und{" "}
                    <b>Organisationstalent</b>. Durch meine Weiterbildung zum
                    Data Analyst verbinde ich diese <b>Soft Skills</b> mit{" "}
                    <b>analytischem Denken</b> und <b>technischem Know-how</b>.
                    Ich arbeite <b>selbstständig, strukturiert</b> und lerne
                    schnell neue Tools. Meine <b>Empathie</b> hilft mir,
                    komplexe Daten verständlich aufzubereiten und in{" "}
                    <b>stressigen Situationen</b> den Überblick zu behalten. Ich
                    suche eine Position als <b>analytischer Teamplayer</b> in
                    einem <i>innovativen Umfeld mit Entwicklungspotenzial</i>.
                </p>
            </div>
            <div className="flex gap-4 justify-center mt-6">
                <a
                    href="mailto:ratzmer.d86@gmail.com"
                    className="px-6 font-semibold py-3 bg-red-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-neutral-200 text-center rounded-lg transition">
                    Kontaktieren Sie mich hier direkt via Mail
                </a>

                <a
                    href="https://www.linkedin.com/in/dorian-ratzmer"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 font-semibold py-3 bg-blue-700/90 hover:bg-blue-800/90 backdrop-blur shadow shadow-blue-700/90 text-white text-center rounded-lg transition">
                    <FaLinkedin size={24} />
                    oder via PN bei LinkedIn
                </a>
            </div>
        </div>
    );
};
