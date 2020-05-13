import React from "react";

const Step = ({ stepData }) => {
  let strStatus = stepData.status;
  let stepStatus = strStatus.split("_").join(" ");

  return(
    <ul className="step">
      <li>{stepData.step_name}</li>
      <li className={
          strStatus === "done" ? "step-status status-done" 
          :
          strStatus === "not_started" ? "step-status status-not-started" : "step-status"
        }>   
        {stepStatus}
      </li>
    </ul>
  );
}

export default Step;