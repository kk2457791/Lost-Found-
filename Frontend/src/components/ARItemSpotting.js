import React, { useRef, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

export default function ARItemSpotting() {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const runDetection = async () => {
      const model = await cocoSsd.load();
      const detect = async () => {
        const predictions = await model.detect(videoRef.current);
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        predictions.forEach(pred => {
          if (pred.score > 0.6) {
            ctx.strokeStyle = "green";
            ctx.lineWidth = 4;
            ctx.strokeRect(...pred.bbox);
            ctx.font = "18px Arial";
            ctx.fillStyle = "green";
            ctx.fillText(pred.class, pred.bbox[0], pred.bbox[1] > 20 ? pred.bbox[1] - 5 : 10);
          }
        });
        requestAnimationFrame(detect);
      };
      detect();
    };

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });
    runDetection();
  }, []);

  return (
    <div>
      <h3>AR Item Spotting</h3>
      <video ref={videoRef} width="640" height="480" style={{ position: "absolute" }} />
      <canvas ref={canvasRef} width="640" height="480" style={{ position: "absolute" }} />
    </div>
  );
          }
          
