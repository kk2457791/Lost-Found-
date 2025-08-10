import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function ReputationDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/users/USER_ID_HERE").then(res => setUser(res.data));
  }, []);

  if (!user) return <p>Loading reputation...</p>;

  return (
    <div>
      <h3>Reputation Dashboard</h3>
      <p>Points: {user.points}</p>
      <p>Badges: {user.badges.join(", ")}</p>
      <p>Reputation Score: {user.reputationScore}</p>
    </div>
  );
    }
    
