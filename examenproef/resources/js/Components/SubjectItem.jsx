import { useState } from "react";

function SubjectItem({ title, children }) {
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

export default SubjectItem;