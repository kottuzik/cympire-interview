import React from "react";
import Step from "./Step";

const TeamInstances = ({ teamInst }) => (
  <div className="team">
    <h2>{teamInst.team_name}</h2>
    {teamInst.steps.map(step => (
      <Step key={step.step_id} stepData={step} />
    ))}
  </div>
);

export default TeamInstances;