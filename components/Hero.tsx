"use client";
import Image from "next/image";
import { HoverChip } from "./Shared/HoverChip";
import MyChart from "./recharts/MyChart";

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
                    Assistenz mit, gepaart mit ausgeprägtem{" "}
                    <b>
                        Verantwortungsbewusstsein, Kommunikationsstärke und
                        Organisationstalent
                    </b>
                    . Durch meine Weiterbildung zum Data Analyst verbinde ich
                    diese <b>Soft Skills</b> mit analytischem Denken und
                    technischem Know-how. Ich{" "}
                    <b>arbeite selbstständig, lerne schnell</b> neue Tools und
                    Methoden und setze auf eine strukturierte, zuverlässige
                    Arbeitsweise. Meine Erfahrung im Umgang mit Menschen mit
                    besonderen Bedürfnissen hat meine <b>Empathie</b> gestärkt –
                    eine Fähigkeit, die ich auch nutze, um komplexe Daten
                    verständlich aufzubereiten. In stressigen Situationen
                    behalte ich den Überblick und finde{" "}
                    <b>zielorientierte Lösungen</b>. Ich suche eine Position, in
                    der ich mich als{" "}
                    <b>kommunikativer, analytischer Teamplayer</b>{" "}
                    weiterentwickeln kann – idealerweise in einem innovativen
                    Umfeld, das persönliche Entwicklung fördert.
                </p>
            </div>
        </div>
    );
};
