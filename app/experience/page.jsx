"use client";
import React from "react";

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const achievements = [
    { year: 2025, title: "TSCCTF", rank: "rk.4 (Overall) / rk.1 (Qualified)" },
    { year: 2025, title: "AIS3 EOF", rank: "銀質獎 (rk.2) & 炸彈超人獎" },
    { year: 2024, title: "MyFirstCTF", rank: "金質獎 (rk.2)"},
    { year: 2024, title: "AIS3 pre-exam", rank: "rk.13" },
    { year: 2024, title: "Aegis Ctf 神盾盃資安競賽初賽", rank: "rk.11 (solo)" },
    { year: 2024, title: "Asia Taiwan Online Programming Contest", rank: "Silver Award" },
    { year: 2024, title: "ICPC Taichung Regional", rank: "Bronce Award" },
    { year: 2024, title: "NCPC 全國大專電腦軟體設計競賽", rank: "rk.4" },
    { year: 2024, title: "Meta Hacker Cup", rank: "rk.678/5000 (全球排名)" },
    { year: 2024, title: "成大高中生邀請賽協助驗題", rank: "" },
    { year: 2023, title: "Asia Taiwan Online Programming Contest", rank: "Silver Award" },
    { year: 2023, title: "YTP 少年圖靈計畫決賽 (進專題)", rank: "rk.21" },
    // ... add more achievements as needed
  ]

const score = [
    { year: 2023, title: "成大資訊工程學系 112 上學期平均 97.29", rank: "rk.1" },
    { year: 2024, title: "成大資訊工程學系 112 下學期平均 96.88", rank: "rk.1" },
]

const Experience = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full space-y-8 pb-24">
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4 lang-zh">競賽經歷</h2>
                    <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-[#27272c] md:hover:shadow-[0_0_10px_4px_theme('colors.accent.DEFAULT')] border border-[#27272c] md:hover:border-accent md:hover:scale-101 duration-500 ease-in-out"
                        >
                            <Badge variant="secondary" className="w-fit bg-accent hover:bg-accent">
                                {achievement.year}
                            </Badge>
                            <div className="flex-grow">
                                <h3 className="text-white">{achievement.title}</h3>
                            </div>
                            <span className="text-white">{achievement.rank}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4 lang-zh">在校成績</h2>
                    <div className="space-y-3">
                    {score.map((achievement, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-[#27272c] md:hover:shadow-[0_0_10px_4px_theme('colors.accent.DEFAULT')] border border-[#27272c] md:hover:border-accent md:hover:scale-101 duration-500 ease-in-out"
                        >
                            <Badge variant="secondary" className="w-fit bg-accent hover:bg-accent">
                                {achievement.year}
                            </Badge>
                            <div className="flex-grow">
                                <h3 className="text-white">{achievement.title}</h3>
                            </div>
                            <span className="text-white">{achievement.rank}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Experience;
