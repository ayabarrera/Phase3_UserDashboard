import React from "react";
import "./formcontainer.css";

export default function FormContainer({ title, children }) {
  return (

    <section className="container-section">
    <div className="form-container">
      <h1>{title}</h1>
      {children}
    </div>
    </section>
  );
}
