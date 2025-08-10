import React, { useState } from "react";
import API from "../services/api";

export default function LostReport() {
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const submit = async () => {
    await API.post("/items", {
      type: "lost",
      description: desc,
      imageUrl: img,
      location: { lat: Number(lat), lng: Number(lng) }
    });
    alert("Lost item reported!");
  };

  return (
    <div>
      <h3>Report Lost Item</h3>
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input placeholder="Image URL" value={img} onChange={e => setImg(e.target.value)} />
      <input placeholder="Latitude" value={lat} onChange={e => setLat(e.target.value)} />
      <input placeholder="Longitude" value={lng} onChange={e => setLng(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
    }
    
