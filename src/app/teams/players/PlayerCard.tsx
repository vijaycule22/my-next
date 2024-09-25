"use client";
import { BookmarkIcon, DownloadIcon } from "@radix-ui/react-icons";
import { Avatar, Button } from "@radix-ui/themes";
import html2canvas from "html2canvas";
import React, { useRef } from "react";

const PlayerCard = () => {

    return (
        <div>
            <div className="flex">
                <div className="flex justify-center gap-4 flex-col items-center">
                    <div className="card">
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
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
