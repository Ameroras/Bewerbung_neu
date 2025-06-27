"use client";
import Image from "next/image";
import { HoverChip } from "./HoverChip";

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
    "Web Scraping (z.B. BeautifulSoup, Selenium)",
    "API-Anbindung (z.B. mit requests)",
    "Arbeiten mit JSON / XML",
    "Arbeiten mit Datumswerten",
    "Virtual Environments & Paketmanagemen",
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
    "Joins (INNER, LEFT, RIGHT, FULL)",
    "Aggregationen (COUNT, AVG, SUM, ect.)",
    "SELECT-Abfragen",
    "WHERE-Klauseln",
    "GROUP BY & HAVING",
    "Normalisierung",
    "Datentypen",
  ],
  [
    "Pivot Tabellen",
    "Power Query",
    "Wenn Funktionen",
    "Diagramme erstellen",
    "Formeln",
    "SVERWEIS",
    "INDEX",
    "Dynamische Bereiche",
    "Bedingte Formatierung",
  ],
  [
    "Gantt_Diagramme",
    "Priorisierungsmethoden (MoSCoW, Eisenhower)",
    "Teamrollen & Verantwortlichkeiten",
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
      <div className="flex flex-col md:flex-row gap-6 p-2">
        {/* Linke Spalte */}
        <div className="flex flex-col md:flex-row gap-4">
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
              <p className="font-bold text-2xl">Skillset:</p>
              <div className="grid grid-cols-3 gap-1">
                {labels.map((val, idx) => (
                  <HoverChip skills={skills[idx]} key={val + idx} label={val} />
                ))}
              </div>
            </div>
            <hr />
            <div className="flex gap-4">
              <Image
                src="/cert.png"
                className="rounded-4xl"
                width={250}
                height={200}
                alt="IHK Zertifikat 1"
              />
                {/*<Image
                src="/cert.png"
                className="rounded-4xl"
                width={250}
                height={200}
                alt="IHK Zertifikat 2"
              />*/}
            </div>
          </div>
        </div>

        {/* Rechte Spalte: Radar-Chart */}
        <div className="flex items-center justify-center">
          <Image
            src="/Radar_Skillset.png"
            className="rounded-4xl"
            width={400}
            height={400}
            alt="Radar Chart Skillset"
          />
        </div>
      </div>

      {/* Was mich ausmacht */}
      <div>
        <p className="text-3xl py-3">Was mich ausmacht</p>
        <p>
          Ich bringe langjährige Erfahrung in der persönlichen Assistenz mit,
          gepaart mit ausgeprägtem{" "}
          <b>
            Verantwortungsbewusstsein, Kommunikationsstärke und
            Organisationstalent
          </b>
          . Durch meine Weiterbildung zum Data Analyst verbinde ich diese{" "}
          <b>Soft Skills</b> mit analytischem Denken und technischem Know-how.
          Ich <b>arbeite selbstständig, lerne schnell</b> neue Tools und
          Methoden und setze auf eine strukturierte, zuverlässige Arbeitsweise.
          Meine Erfahrung im Umgang mit Menschen mit besonderen Bedürfnissen hat
          meine <b>Empathie</b> gestärkt – eine Fähigkeit, die ich auch nutze,
          um komplexe Daten verständlich aufzubereiten. In stressigen
          Situationen behalte ich den Überblick und finde{" "}
          <b>zielorientierte Lösungen</b>. Ich suche eine Position, in der ich
          mich als <b>kommunikativer, analytischer Teamplayer</b>{" "}
          weiterentwickeln kann – idealerweise in einem innovativen Umfeld, das
          persönliche Entwicklung fördert.
        </p>
      </div>
    </div>
  );
};
