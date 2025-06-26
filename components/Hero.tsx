"use client";
import Image from "next/image";
import { Chip } from "./Chip";


const labels = ["Python", "Power BI", "SQL", "Excel", "PM-Tools", "Teamplay"];
const skills =[["Pandas", "Numpy", "Matplotlib", "Seaborn", "Plotly", "Regex", "Jupyter Notebook", "Web Scraping (z.B. BeautifulSoup, Selenium)","API-Anbindung (z.B. mit requests)", "Arbeiten mit JSON / XML", "Arbeiten mit Datumswerten", "Virtual Environments & Paketmanagemen"],
    ["Dashboard Design", "DAX", "Power Query", "Tabellenbeziehungen","Datenmoddelierug", "KPI_Visualisierung", "Dynamische Visuals", "Datenbereinigung"], ["Joins (INNER, LEFT, RIGHT, FULL)", "Aggregationen (COUNT, AVG, SUM, ect.)", "SELECT-Abfragen", "WHERE-Klauseln", "GROUP BY & HAVING", "Normalisierung","Datentypen"],["Pivot Tabellen", "Power Query", "Wenn Funktionen", "Diagramme erstellen", "Formeln","SVERWEIS", "INDEX", "Dynamische Bereiche", "Bedingte Formatierung"],["Gantt_Diagramme", "Priorisierungsmethoden (MoSCoW, Eisenhower)", "Teamrollen & Verantwortlichkeiten", "Ressourcenmanagement", "Projektzieldefinition", "Risikoanalyse", "Projektstatusberichte"],["Kommunikationsfähigkeit", "Kooperationsbereitschaft", "Verlässlichkeit", "Empathie", "Kritikfähigkeit", "Lösungsorientiert", "Anpassungsfähig"], "Interdisziplinäre Zusammenarbeit"]

export const Hero = () => {
    return (
        <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-2  bg-slate-800 shadow-lg border border-slate-600 rounded-xl">
            <div className="font-bold text-4xl">Dorian Ratzmer</div>
            <p className="italic py-1">
                {" "}
                IHK-zertifizierter Datenanalyst - Python, SQL, Power BI
            </p>
            <div className="flex items-center p-2">
                <Image
                    src="/Bewerbungsfoto.jpg"
                    className="rounded-4xl"
                    width={250}
                    height={200}
                    alt="Picture of the author"
                />
                <div className="flex px-4 gap-4 flex-col">
                    <div>
                        <p className="font-bold text-2xl">Skillset:</p>
                        <div className="grid grid-cols-3 gap-1 ">
                            {labels.map((val, idx) => {
                                return <Chip skills={skills[idx]} key={val + idx} label={val} />;
                            })}
                        </div>
                    </div>
                    <hr />
                    <div className="flex">
                        <Image
                            src="/cert.png"
                            className="rounded-4xl"
                            width={250}
                            height={200}
                            alt="Picture of the author"
                        />

                    </div>
                </div>
            </div>
            <div>
                <p className="text-3xl py-3"> Was mich ausmacht </p>
                <p className="">
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
