import React from "react";

export default function ErrorMessage({ message }) {
  return message ? <p className="error-message">{message}</p> : null;
}
