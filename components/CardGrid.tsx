"use client";
import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardFooter } from "./ui/card";
import Image from "next/image";

interface Pin {
  head: string;
  shadow: string;
  glow: string;
}

const PIN_COLORS: Record<string, Pin> = {
  red: {
    head: "bg-red-500",
    shadow: "shadow-red-900/60",
    glow: "#ef4444",
  },
  blue: {
    head: "bg-blue-400",
    shadow: "shadow-blue-900/60",
    glow: "#60a5fa",
  },
  yellow: {
    head: "bg-yellow-300",
    shadow: "shadow-yellow-900/60",
    glow: "#fde047",
  },
  cream: {
    head: "bg-amber-100",
    shadow: "shadow-amber-900/60",
    glow: "#fef3c7",
  },
};

const CARD_COLORS = {
  pink: "bg-[#F0ADB0]",
  orange: "bg-[#F5C2AB]",
  yellow: "bg-[#FAE0AD]",
  green: "bg-[#C6D7B2]",
  blue: "bg-[#C4DEF0]",
};

interface Thing {
  id: number;
  link: string;
  img: string;
  title: string;
  description: string;
  rotation: number;
  tape: boolean;
  pin: string;
  card_color: string;
}

const myThings: Readonly<Thing[]> = [
  {
    id: 1,
    link: "https://BulkCube.Vercel.app",
    img: "/bulkcube-preview.png",
    title: "BulkCube",
    description: "Turn Your MTG Bulk into a cube!",
    rotation: -2.1,
    tape: false,
    pin: "red",
    card_color: CARD_COLORS.yellow,
  },
  {
    id: 2,
    link: "https://foooodie.pages.dev/",
    img: "/foooodie-preview.png",
    title: "Foodie",
    description: "Play a fun game to finally find a place to eat!",
    rotation: 1.8,
    tape: true,
    pin: "red",
    card_color: CARD_COLORS.blue,
  },
];

function Tape() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -top-3 z-10 w-20 h-5 rounded-sm"
      style={{
        background: "rgba(255, 235, 150, 0.5)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        backdropFilter: "blur(1px)",
      }}
    >
      <div
        className="absolute inset-y-0 left-0 w-2 rounded-l-sm"
        style={{ background: "rgba(200,170,80,0.25)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-2 rounded-r-sm"
        style={{ background: "rgba(200,170,80,0.25)" }}
      />
    </div>
  );
}

function Pin({ color }: { color: string }) {
  const { head, shadow } = PIN_COLORS[color] || PIN_COLORS.red;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-10 flex flex-col items-center">
      {/* Pin head */}
      <div
        className={`w-5 h-5 rounded-full ${head} shadow-lg ${shadow}`}
        style={{
          boxShadow: `0 2px 6px rgba(0,0,0,0.5), inset 2px 2px 4px rgba(255,255,255,0.35), inset -1px -1px 3px rgba(0,0,0,0.25)`,
        }}
      />
      {/* Pin shaft */}
      <div
        className="w-0.5 h-3.5 rounded-b"
        style={{
          background: "linear-gradient(to bottom, #bbb, #666)",
        }}
      />
    </div>
  );
}

const CardGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 p-10">
      {myThings.map((thing) => (
        <div
          key={thing.id}
          className="relative cursor-pointer select-none"
          style={{
            transform: `rotate(${hoveredId === thing.id ? thing.rotation * 0.5 : thing.rotation}deg) translateY(${hoveredId === thing.id ? "-8px" : "0"}) scale(${hoveredId === thing.id ? 1.04 : 1})`,
            transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: hoveredId === thing.id ? 20 : 1,
          }}
          onMouseEnter={() => setHoveredId(thing.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {thing.tape ? <Tape /> : <Pin color={thing.pin} />}
          <Link
            href={thing.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              className="relative p-0 gap-0 border-0 overflow-hidden shadow-md shadow-[#7A5C3E] flex flex-col h-full rounded-none"
              style={{
                boxShadow:
                  hoveredId === thing.id
                    ? "4px 8px 24px rgba(0,0,0,0.4), 8px 14px 40px rgba(0,0,0,0.25)"
                    : "2px 4px 10px rgba(0,0,0,0.25), 4px 8px 24px rgba(0,0,0,0.18)",
              }}
            >
              <CardHeader
                className={`p-5 w-full h-full flex flex-col items-center ${thing.card_color} rounded-none`}
              >
                <Image
                  src={thing.img}
                  alt={thing.link + " preview"}
                  width={300}
                  height={200}
                  style={{
                    filter:
                      "drop-shadow(0 5px 5px rgba(0,0,0,0.5)) sepia(0.12) contrast(0.95) brightness(0.9)",
                  }}
                />
              </CardHeader>
              <CardFooter
                className={`flex justify-center items-center ${thing.card_color} flex-1 p-4 border-0 -mt-1 rounded-none`}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[#555555] font-indie-flower font-bold text-2xl">
                    {thing.title}
                  </h3>
                  <p className=" text-[#555555] line-clamp-2 font-indie-flower text-lg">
                    {thing.description}
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
