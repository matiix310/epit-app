import React, { useEffect, useState } from "react";

// styles
import "./Pegasus.css";

// components
import RightPanel from "@components/RightPanel/RightPanel";
import Title from "@components/Title/Title";

// utils
import { PegasusApi } from "@utils/api";
import { PegasusUe, PegasusParsedGrades, PegasusSchema } from "@utils/pegasusSchema";
import GradeDisplay from "../GradeDisplay/GradeDisplay";
import EcueComponent from "../EcueComponent/EcueComponent";

function computeUePersonalMean(ue: PegasusUe) {
  let [count, tot]: [number, number] = [0, 0];

  Object.keys(ue).forEach((ecueName) => {
    count += ue[ecueName].personalMean * ue[ecueName].coef;
    tot += ue[ecueName].coef;
  });

  // round the result to 2 digits
  return Math.round((count / tot) * 100) / 100;
}

function computeUeClassMean(ue: PegasusUe) {
  let [count, tot]: [number, number] = [0, 0];

  Object.keys(ue).forEach((ecueName) => {
    count += ue[ecueName].classMean * ue[ecueName].coef;
    tot += ue[ecueName].coef;
  });

  // round the result to 2 digits
  return Math.round((count / tot) * 100) / 100;
}

function Pegasus() {
  const [grades, setGrades]: [
    PegasusParsedGrades,
    React.Dispatch<React.SetStateAction<PegasusParsedGrades>>
  ] = useState({});

  useEffect(() => {
    // get the grades data
    const microsoft_access_token: string | null = sessionStorage.getItem(
      "microsoft_access_token"
    );
    if (microsoft_access_token) {
      // display the data
      PegasusApi.getGrades(microsoft_access_token).then((gradesData) =>
        setGrades(PegasusSchema.parseGrades(gradesData, "S1"))
      );
    }
  }, []);

  return (
    <>
      <RightPanel />
      <Title name="PEGASUS" />
      <div className="gradeContainer">
        {Object.keys(grades).length ? (
          Object.keys(grades).map((ueName) => {
            const personnalMean = computeUePersonalMean(grades[ueName]);
            const classMean = computeUeClassMean(grades[ueName]);
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
                      key={ecueName}
                    />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default Pegasus;
