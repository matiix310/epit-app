import React from "react";
import GradeDisplay from "../../GradeDisplay/GradeDisplay";

// styles
import "./GradeComponent.css";

type GradeComponentProps = {
  date: string;
  effectif: number;
  personalGrade: number;
  classGrade: number;
  onClick: () => void;
};

function GradeComponent({
  date,
  effectif,
  personalGrade,
  classGrade,
  onClick,
}: GradeComponentProps) {
  return (
    <>
      <div onClick={onClick} className="grade-component-container">
        <div className="grade-component-title-container">
          <h1 className="grade-component-date">{date}</h1>
          <h1 className="grade-component-effectif">{effectif} personnes</h1>
        </div>
        <div className="grade-component-means-container">
          <GradeDisplay
            grade={personalGrade}
            color={personalGrade >= classGrade ? "green" : "red"}
          />
          <GradeDisplay grade={classGrade} color="transparent" />
        </div>
      </div>
    </>
  );
}

export default GradeComponent;
