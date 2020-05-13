import React from "react";

const Step = ({ stepData }) => (
  <ul className="step">
    <li>{stepData.step_name}</li>
    <li className="step-status">{stepData.status}</li>
  </ul>
);

export default Step;