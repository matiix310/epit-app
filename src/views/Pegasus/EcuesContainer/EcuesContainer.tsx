import React from "react";

// styles
import "./EcuesContainer.css";

import { PegasusParsedGrades } from "@utils/pegasusSchemas";
import PegasusSchemas from "@utils/pegasusSchemas";
import GradeDisplay from "../GradeDisplay/GradeDisplay";
import EcueComponent from "../EcueComponent/EcueComponent";

type EcuesContainerProps = {
  grades: PegasusParsedGrades;
  onClick: (ecueName: string) => void;
};

function EcuesContainer({ grades, onClick }: EcuesContainerProps) {
  return (
    <>
      {Object.keys(grades).map((ueName) => {
        const personnalMean = PegasusSchemas.computeUePersonalMean(grades[ueName]);
        const classMean = PegasusSchemas.computeUeClassMean(grades[ueName]);
        return (
          <div className="ue-container" key={ueName}>
            <div className="ue-header">
              <h1 className="ue-title">{ueName}</h1>
              <GradeDisplay
                color={personnalMean >= classMean ? "green" : "red"}
                grade={personnalMean}
              />
              <GradeDisplay color="transparent" grade={classMean} />
            </div>
            <div className="ue-content">
              {Object.keys(grades[ueName]).map((ecueName) => (
                <EcueComponent
                  name={ecueName}
                  personnalMean={grades[ueName][ecueName].personalMean}
                  classMean={grades[ueName][ecueName].classMean}
                  colorId={Object.keys(grades).indexOf(ueName)}
                  onClick={() => onClick(ecueName)}
                  key={ecueName}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EcuesContainer;
