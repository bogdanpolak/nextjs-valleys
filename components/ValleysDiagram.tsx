"use client";

import React from "react";

type SvgSize = { maxX: number; maxY: number; zeroY: number };
type ValleysDiagramProps = { path: string };

export function ValleysDiagram({ path }: ValleysDiagramProps) {
  const CalcSvgSize = (pathLen: number) => {
    if (pathLen <= 18) return { maxX: 220, maxY: 80, zeroY: 40 };
    if (pathLen <= 32) return { maxX: 370, maxY: 140, zeroY: 70 };
    if (pathLen <= 52) return { maxX: 560, maxY: 200, zeroY: 100 };
    return { maxX: 1200, maxY: 400, zeroY: 200 };
  };
  let svgSize = CalcSvgSize(path.length);

  const buildSvgPath = (path: string): string => {
    let d = `M10,${svgSize.zeroY} h10 m1,0`;
    let level = 0;
    for (const ch of path) {
      switch (ch) {
        case "U":
          d = d + " l9,-9 m1,-1";
          level++;
          break;
        case "D":
          d = d + " l9,9 m1,1";
          level--;
          break;
        default:
          break;
      }
    }
    if (level === 0) d = d + " h10 m1,0";
    return d;
  };
  return (
    <svg
      viewBox={`0 0 ${svgSize.maxX} ${svgSize.maxY}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
    >
      <line
        x1="0"
        y1={`${svgSize.zeroY}`}
        x2={`${svgSize.maxX}`}
        y2={`${svgSize.zeroY}`}
        stroke="silver"
        strokeWidth="0.5"
      />
      <path strokeWidth="1" stroke="black" fill="none" d={buildSvgPath(path)} />
    </svg>
  );
}
