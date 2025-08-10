import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function MapView() {
  const [items, setItems] = useState([]);
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    API.get("/items").then(res => setItems(res.data));
    API.get("/hotspots").then(res => setHotspots(res.data));
  }, []);

  return (
    <div>
      <h3>Map View & Hotspots</h3>
      {items.map(item => (
        <div key={item._id}>
          {item.type} - {item.description} ({item.location?.lat}, {item.location?.lng})
        </div>
      ))}
      <h4>Hotspots</h4>
      {hotspots.map((spot, i) => (
        <div key={i}>
          {spot.location.lat}, {spot.location.lng} (Count: {spot.count})
        </div>
      ))}
    </div>
  );
                                                 }
    
