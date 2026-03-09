import React from "react";


export default function Timeline() {
  const steps = [
    { id: 1, title: "Module 1" },
    { id: 2, title: "Module 2" },
    { id: 3, title: "Module 3" },
    { id: 4, title: "Voortgangsgesprek", active: true },
  ];

  return (
    <div className="timeline">
      {steps.map((step) => (
        <div key={step.id} className="timeline-item">
          <div className={`circle ${step.active ? "active" : ""}`} />
          <p className={step.active ? "active-text" : ""}>
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
}