import React from "react";
import GradeDisplay from "../GradeDisplay/GradeDisplay";

// styles
import "./EcueComponent.css";

type EcueComponentProps = {
  name: string;
  personnalMean: number;
  classMean: number;
  colorId: number;
  onClick: () => void;
};

const colors: string[] = [
  "#90FCF9",
  "#778DD3",
  "#009DDC",
  "#F49FBC",
  "#F2CD5D",
  "#FF8811",
  "#C1BDDB",
  "#EDB88B",
];

function EcueComponent({
  name,
  personnalMean,
  classMean,
  colorId,
  onClick,
}: EcueComponentProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="ecue-component-container"
        style={{ backgroundColor: colors[colorId % colors.length] }}
      >
        <div className="ecue-title-container">
          <h1>{name}</h1>
        </div>
        <div className="ecue-means-container">
          <GradeDisplay
            grade={personnalMean}
            color={personnalMean >= classMean ? "green" : "red"}
          />
          <GradeDisplay grade={classMean} color="transparent" />
        </div>
      </div>
    </>
  );
}

export default EcueComponent;
