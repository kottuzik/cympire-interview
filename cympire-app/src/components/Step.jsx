import React from "react";

const Step = ({ stepData }) => (
  <ul className="step-list">
    <li>{stepData.step_name}</li>
    <li>{stepData.status}</li>
  </ul>
);

export default Step;