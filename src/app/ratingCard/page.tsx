"use client";
import { BookmarkIcon, DownloadIcon } from "@radix-ui/react-icons";
import { Avatar, Button } from "@radix-ui/themes";
import html2canvas from "html2canvas";
import React, { useRef } from "react";

const RatingCard = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "element.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div>
      <div className="card" ref={captureRef}>
        <div className="hero">
          <div className="role">
            <span>98</span>
            <span>BAT</span>
            <span>🇮🇳</span>
          </div>
          <div className="avatar">
            <Avatar size={"9"} src="/virat.png" fallback="T" />
          </div>
        </div>
        <div className="title">Virat kohli</div>
        <div className="flex stat">
          <label>Batting</label>
          <label className="stat-value">98</label>
        </div>
        <div className="flex stat">
          <label>Bowling</label>
          <label className="stat-value">98</label>
        </div>
        <div className="flex stat">
          <label>Fielding</label>
          <label className="stat-value">98</label>
        </div>
      </div>
      <Button onClick={handleDownload}>
        <DownloadIcon /> Download
      </Button>
    </div>
  );
};

export default RatingCard;
