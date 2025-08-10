import React, { useState } from "react";
import API from "../services/api";

export default function VoiceReport() {
  const [text, setText] = useState("");

  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };
    recognition.start();
  };

  const submit = async () => {
    await API.post("/items", { type: "lost", description: text });
    alert("Lost item reported via voice!");
  };

  return (
    <div>
      <h3>Voice Reporting</h3>
      <button onClick={startRecognition}>Start Speaking</button>
      <p>{text}</p>
      <button onClick={submit} disabled={!text}>Submit Report</button>
    </div>
  );
        }
    
