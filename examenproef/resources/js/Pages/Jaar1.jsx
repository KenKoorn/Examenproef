import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

function VakItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="vak-item">
      <div className="vak-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={open ? "arrow rotate" : "arrow"}>▼</span>
      </div>

      {open && <div className="vak-content">{children}</div>}
    </div>
  );
}

export default function Jaar1() {
  const backgroundUrl =
    "https://welkombijma.nl/wp-content/uploads/2023/05/SD-scaled.jpg"; // Pas dit pad aan naar jouw afbeelding

  return (
    <>
      <Head title="Jaar 1" />

      <div
        className="jaar1"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >

       <div className="timeline">
  <div className="timeline-item">
    <div className="circle"></div>
    <div className="line"></div>
    <p>Module 1</p>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <div className="line"></div>
    <p>Module 2</p>
  </div>

  <div className="timeline-item">
    <div className="circle"></div>
    <div className="line"></div>
    <p>Module 3</p>
  </div>

  <div className="timeline-item active">
    <div className="circle"></div>
    <p>Voortgangsgesprek</p>
  </div>
</div>

        {/* CENTER CARD */}
        <div className="content-card">
          <div className="module">
            <h1>Module 1</h1>
            <p className="subtitle">Oriëntatie fase</p>
            <p>
              In het eerste jaar maak je kennis met de basis van software
              development. Je leert programmeren, samenwerken en werken aan
              projecten die aansluiten bij het werkveld.
            </p>
          </div>

          <div className="vakken-section">
            <h2>Vakken</h2>

            <div className="vakken-grid">
              <VakItem title="BO">
                <ul>
                  <li>De beroepsopdracht die je gaat maken</li>
                  <li>Hulp bij je beroepshouding</li>
                </ul>
              </VakItem>

              <VakItem title="GDV">
                <ul>
                  <li>Unity training</li>
                  <li>Je eerste game development proefje</li>
                </ul>
              </VakItem>

              <VakItem title="PROG">
                <ul>
                  <li>Basis JavaScript</li>
                  <li>Werken met React</li>
                </ul>
              </VakItem>

              <VakItem title="SKILL">
                <ul>
                  <li>Presenteren</li>
                  <li>Samenwerken</li>
                </ul>
              </VakItem>
              <VakItem title="BWP">
                <ul>
                  <li>Presenteren</li>
                  <li>Samenwerken</li>
                </ul>
              </VakItem>
            </div>
          </div>

          <Link href="/" className="back-link">
            Terug naar home
          </Link>
        </div>

      </div>
    </>
  );
}