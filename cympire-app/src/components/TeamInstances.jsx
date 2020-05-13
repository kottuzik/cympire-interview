import React from "react";
import Step from "./step/Step";

const TeamInstances = ({ teamInst }) => (
  <div className="team">
    <h2 className="team-name">
      {teamInst.team_name ? teamInst.team_name : "Team's steps"}
    </h2>
  
    <div className="steps-wrap">
      {teamInst.steps.map(step => (
        <Step key={step.step_id} stepData={step} />
      ))}
    </div>
    
    
  </div>
);

export default TeamInstances;