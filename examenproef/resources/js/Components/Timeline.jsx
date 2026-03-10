import { usePage } from "@inertiajs/react";
import React from "react";


export default function Timeline() {
  console.log(usePage().props);
  const modules = usePage().props.modules;
  const steps = [
    { id: 1, title: "Module 1" },
    { id: 2, title: "Module 2" },
    { id: 3, title: "Module 3" },
    { id: 4, title: "Voortgangsgesprek", active: true },
  ];

  return (
    <div className="timeline">
      {
        modules.map((module, index) => 
          <div className="timeline-item" key={index}>
            <div className="circle"/>
            <p>
              {module.name}
            </p>
          </div>
        )
      }
      {/* {steps.map((step) => (
        <div key={step.id} className="timeline-item">
          <div className={`circle ${step.active ? "active" : ""}`} />
          <p className={step.active ? "active-text" : ""}>
            {step.title}
          </p>
        </div>
      ))} */}
    </div>
  );
}