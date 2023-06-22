import React, { useEffect, useState } from "react";

// styles
import "./Pegasus.css";

// components
import RightPanel from "@components/RightPanel/RightPanel";
import Title from "@components/Title/Title";

// utils
import { PegasusApi, PegasusGrades } from "@utils/api";
import PegasusSchemas, {
  PegasusEcue,
  PegasusParsedGrades,
  SchemasId,
} from "@utils/pegasusSchemas";
import EcuesContainer from "../EcuesContainer/EcuesContainer";
import DetailedEcue from "../DetailedEcue/DetailedEcue";
import Dropper from "@components/Dropper/Dropper";

function Pegasus() {
  const [grades, setGrades]: [
    PegasusParsedGrades,
    React.Dispatch<React.SetStateAction<PegasusParsedGrades>>
  ] = useState({});

  const [gradesData, setGradesData]: [
    PegasusGrades,
    React.Dispatch<React.SetStateAction<PegasusGrades>>
  ] = useState({});

  const [title, setTitle] = useState("PEGASUS");
  const [selectedEcue, setSelectedEcue] = useState("");

  const HandleReturnToEcueMenu = () => {
    setTitle("PEGASUS");
    setSelectedEcue("");
  };

  const getSelectedEcue = (ecue: string): PegasusEcue => {
    const ues = Object.keys(grades).map((ueName) => grades[ueName]);

    const ueFind = ues.filter((ue) =>
      Object.keys(ue).find((ecueName) => ecueName === ecue)
    )[0];

    return ueFind[ecue];
  };

  useEffect(() => {
    // get the grades data
    const microsoft_access_token: string | null = sessionStorage.getItem(
      "microsoft_access_token"
    );
    if (microsoft_access_token) {
      // display the data
      PegasusApi.getGrades(microsoft_access_token).then((gradesData) => {
        setGradesData(gradesData);
        setGrades(
          PegasusSchemas.parseGrades(
            gradesData,
            Object.keys(PegasusSchemas.Schemas)[0] as SchemasId
          )
        );
      });
    }
  }, []);

  const switchSchemas = (schemasId: string) => {
    setGrades(PegasusSchemas.parseGrades(gradesData, schemasId as SchemasId));
  };

  return (
    <>
      <RightPanel />
      <Title name={title} />
      <div className="gradeContainer">
        {Object.keys(grades).length ? (
          selectedEcue === "" ? (
            <>
              <Dropper
                width="20%"
                height="40px"
                top="0"
                left="0"
                items={Object.keys(PegasusSchemas.Schemas)}
                defaultSelection={Object.keys(PegasusSchemas.Schemas)[0]}
                onSelect={switchSchemas}
              />
              <EcuesContainer
                grades={grades}
                onClick={(ecueName: string) => setSelectedEcue(ecueName)}
              />
            </>
          ) : (
            <DetailedEcue
              ecue={getSelectedEcue(selectedEcue)}
              ecueName={selectedEcue}
              onReturn={HandleReturnToEcueMenu}
            />
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default Pegasus;
