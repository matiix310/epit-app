import React from "react";

// styles
import "./GradeDisplay.css";

type GrageDisplayProps = {
  color: "green" | "red" | "transparent";
  grade: number;
};

const colorsEquivalent = {
  green: "#60D394",
  red: "#EE6055",
  transparent: "transparent",
};

function GradeDisplay({ color, grade }: GrageDisplayProps) {
  return (
    <>
      <div
        className={["grade-display-container", color].join(" ")}
        color={colorsEquivalent[color]}
      >
        <h1>{grade.toFixed(2).replace(/^\d\./, "0$&")}</h1>
      </div>
    </>
  );
}

export default GradeDisplay;
