"use client"
import React, { useState } from 'react';

export default function Filter() {
    const [selected, setSelected] = useState("ทั้งหมด");

    const buttons = ["ทั้งหมด", "ผัก", "ผลไม้"];
    return (
        <div className="flex flex-col py-4 gap-4">
            <h1 className="text-5xl">Explore</h1>
            <div className="flex gap-4">
                {buttons.map((button) => (
                    <button
                        key={button}
                        onClick={() => setSelected(button)}
                        className={`text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none dark:!bg-blue-800 dark:hover:!bg-blue-700 dark:focus:ring-blue-600 ${selected === button
                                ? "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
                                : "bg-gray-400 hover:bg-gray-500 focus:ring-gray-300"
                            }`}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>

    )
}
