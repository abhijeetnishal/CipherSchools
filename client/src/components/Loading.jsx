import React from "react";
import "../styles/Loading.css"

const Loading = ()=> {
  return (
    <div className="loader">
      <div className="scanner">
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loading