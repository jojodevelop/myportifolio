import React from "react";

const ProgresBar = ({ percent = 0  }) => {
  return (
    <div className="border h-4 rounded-lg">
      <div className={`h-full bg-sky-300 rounded-lg`}
      style={{maxWidth:`${percent}%`}}
      
      ></div>
    </div>
  );
};

export default ProgresBar;
