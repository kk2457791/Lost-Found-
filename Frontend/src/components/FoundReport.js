import React, { useState } from "react";
import API from "../services/api";

export default function FoundReport() {
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const submit = async () => {
    const res = await API.post("/items", {
      type: "found",
      description: desc,
      imageUrl: img,
      location: { lat: Number(lat), lng: Number(lng) }
    });

    const matches = await API.post("/match", { foundItemId: res.data._id });
    alert(`Possible matches: ${matches.data.map(m => m.item.description).join(", ")}`);
  };

  return (
    <div>
      <h3>Report Found Item</h3>
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input placeholder="Image URL" value={img} onChange={e => setImg(e.target.value)} />
      <input placeholder="Latitude" value={lat} onChange={e => setLat(e.target.value)} />
      <input placeholder="Longitude" value={lng} onChange={e => setLng(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
      }
    
