import React from "react";
import "../styles/Loading.css"

export default function LoadingSpinner() {
  return (
    <div className="loader">
      <div className="scanner">
        <span>Loading...</span>
      </div>
    </div>
  );
}