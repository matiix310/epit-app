import React from "react";

// styles
import "./GradeTitle.css";

// components
import GradeDisplay from "../../GradeDisplay/GradeDisplay";

type GradetitleProps = {
  name: string;
  coef: number;
  personnaleMean: number;
  classMean: number;
};

function GradeTitle({ name, coef, personnaleMean, classMean }: GradetitleProps) {
  return (
    <>
      <div className="grade-title-container">
        <h1 className="grade-title">{name}</h1>
        <div className="grade-title-coef">
          <h1>{coef}</h1>
        </div>
        <div className="grade-title-means">
          <GradeDisplay
            grade={personnaleMean}
            color={personnaleMean >= classMean ? "green" : "red"}
          />
          <GradeDisplay grade={classMean} color="white" />
        </div>
      </div>
    </>
  );
}

export default GradeTitle;
