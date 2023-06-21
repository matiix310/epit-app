import React from "react";

// styles
import "./GradeDisplay.css";
import PegasusSchemas from "@utils/pegasusSchemas";

type GrageDisplayProps = {
  color: "green" | "red" | "white" | "transparent";
  grade: number;
};

const colorsEquivalent = {
  green: "#60D394",
  red: "#EE6055",
  white: "#ffffff",
  transparent: "transparent",
};

function GradeDisplay({ color, grade }: GrageDisplayProps) {
  return (
    <>
      <div
        className={["grade-display-container", color].join(" ")}
        color={colorsEquivalent[color]}
      >
        <h1>{PegasusSchemas.roundGrade(grade)}</h1>
      </div>
    </>
  );
}

export default GradeDisplay;
