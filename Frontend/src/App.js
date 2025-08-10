import React from "react";
import LostReport from "./components/LostReport";
import FoundReport from "./components/FoundReport";
import MapView from "./components/MapView";
import ARItemSpotting from "./components/ARItemSpotting";
import VoiceReport from "./components/VoiceReport";
import ReputationDashboard from "./components/ReputationDashboard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📍 Lost & Found – Digital Scavenger Hunt</h1>
      <LostReport />
      <FoundReport />
      <MapView />
      <ARItemSpotting />
      <VoiceReport />
      <ReputationDashboard />
    </div>
  );
}

export default App;
    
