import React from "react";

// styles
import "./DetailedEcue.css";

import { PegasusEcue } from "@utils/pegasusSchemas";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import GradeDisplay from "../GradeDisplay/GradeDisplay";
import GradeTitle from "./GradeTitle/GradeTitle";
import GradeComponent from "./GradeComponent/GradeComponent";

type DetailedEcueProps = {
  ecue: PegasusEcue;
  ecueName: string;
  onReturn: () => void;
};

function DetailedEcue({ ecue, ecueName, onReturn }: DetailedEcueProps) {
  const computeGradePersonalMean = (gradeName: string): number => {
    const grades = Object.values(ecue.grades).filter(
      (grade) => grade.evaluation_type_de_note_id === gradeName
    );

    let count = 0;

    grades.forEach((grade) => {
      count += (grade.mark_note / grade.mark_on) * 20;
    });

    return count / grades.length;
  };

  const computeGradeClassMean = (gradeName: string): number => {
    const grades = Object.values(ecue.grades).filter(
      (grade) => grade.evaluation_type_de_note_id === gradeName
    );

    let count = 0;

    grades.forEach((grade) => {
      count += (grade.mark_avg / grade.mark_on) * 20;
    });

    return count / grades.length;
  };

  return (
    <>
      <div className="detailed-ecue-container">
        <div className="detailed-ecue-header">
          <div className="return-button" onClick={onReturn}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <h1 className="detailed-ecue-title">{ecueName}</h1>
          <GradeDisplay
            grade={ecue.personalMean}
            color={ecue.personalMean >= ecue.classMean ? "green" : "red"}
          />
          <GradeDisplay grade={ecue.classMean} color="transparent" />
        </div>
        <div className="detailed-ecue-content">
          {Object.keys(ecue.coefs).map((gradeName) => {
            return (
              <div className="detailed-ecue-grades-container">
                <div className="detailed-ecue-grade-container">
                  <GradeTitle
                    name={gradeName}
                    coef={ecue.coefs[gradeName]}
                    personnaleMean={computeGradePersonalMean(gradeName)}
                    classMean={computeGradeClassMean(gradeName)}
                  />
                  <div className="detailed-grade-list">
                    {ecue.grades
                      .filter((grade) => grade.evaluation_type_de_note_id === gradeName)
                      .map((grade) => {
                        return (
                          <GradeComponent
                            date={grade.evaluation_effective_date}
                            effectif={grade.effectif}
                            personalGrade={(grade.mark_note / grade.mark_on) * 20}
                            classGrade={(grade.mark_avg / grade.mark_on) * 20}
                            onClick={() => {}}
                            key={
                              grade.evaluation_effective_date +
                              grade.evaluation_type_de_note_id
                            }
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DetailedEcue;
