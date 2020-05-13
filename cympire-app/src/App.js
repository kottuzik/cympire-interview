import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamInstances from "./components/TeamInstances";
import Loader from "./components/loader/loader";
import './App.css';

const App = () => {
  const [teamsData, setTeamsData] = useState({});

  let urlDataDev = "https://cors-anywhere.herokuapp.com/"; /* For development only! */
  let urlData = `${urlDataDev}https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi`;
  let xKeyValue = "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9";

  useEffect(() => {
    axios
      .get(urlData, {
        headers: {
          "x-api-key": xKeyValue
        }
      })
      .then(res => setTeamsData(res.data));
  }, []);
  return (
    <main className="main-container">
      <h1 className="main-title">{teamsData.campaign_name}</h1>
      {teamsData.team_instances ? (
        <>
          {teamsData.team_instances.map(ins => {
            return <TeamInstances key={ins.team_id} teamInst={ins} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default App;