import { PegasusGrade, PegasusGrades } from "./api";

type PegasusGradeWithInt = {
  [K in keyof PegasusGrade]: K extends
    | "evaluation_coef"
    | "mark_note"
    | "mark_min"
    | "mark_max"
    | "mark_avg"
    | "mark_on"
    | "effectif"
    ? number
    : PegasusGrade[K];
};

type PegasusEcue = {
  coef: number;
  coefs: {
    [key: string]: number;
  };
  personalMean: number;
  classMean: number;
  grades: PegasusGradeWithInt[];
};

type PegasusUe = {
  /**
   * ECUE name
   */
  [key: string]: PegasusEcue;
};

type PegasusSchemaType = {
  /**
   * UE name
   */
  [key: string]: {
    /**
     * ECUE name
     */
    [key: string]: {
      coef: number;
      coefs: {
        [key: string]: number;
      };
    };
  };
};

type PegasusParsedGrades = {
  /**
   * UE name
   */
  [key: string]: PegasusUe;
};

type SchemasId = "S1" | "S2";

type CountsType = {
  personnal: { [key: string]: { count: number; tot: number } };
  class: { [key: string]: { count: number; tot: number } };
};

class PegasusSchemas {
  static Schemas: { [key: string]: PegasusSchemaType } = {
    S1: {
      "UE MATH1 Mathématiques 1": {
        "ECUE MATH1 Mathématiques 1 CC": {
          coef: 1,
          coefs: {
            SEMINAIRE: 1,
            "CC QCM": 2,
            TD: 2,
            AFIT: 2,
            "CC ECRIT": 3,
            PARTIEL: 5,
          },
        },
      },
      "UE ALGO1 Algorithmique 1": {
        "ECUE ALGO1 Algorithmique 1 CC": {
          coef: 1,
          coefs: {
            SEMINAIRE: 1,
            "CC QCM": 2,
            "CC ECRIT": 3,
            PARTIEL: 5,
          },
        },
      },
      "UE IP1 Informatique pratique 1": {
        "ECUE PROG1 Programmation 1 CC": {
          coef: 1,
          coefs: {
            "CC Suivi": 1,
            "CC ECRIT": 2,
            PARTIEL: 3,
          },
        },
      },
      "UE SI1 Sciences de l'ingénieur 1": {
        "ECUE NTS1 Nouvelles Technologies et Société 1 CC": {
          coef: 1,
          coefs: {
            "CC QCM": 1,
            "CC Suivi": 2,
          },
        },
        "ECUE PHYS/ELEC1 Physique - Electronique 1 CC": {
          coef: 2,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            PARTIEL: 2,
          },
        },
        "ECUE ADO1 Architecture 1 CC": {
          coef: 2,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            PARTIEL: 2,
          },
        },
      },
      "UE SH1 Sciences humaines 1": {
        "ECUE TE1 Technique d'expression 1 CC": {
          coef: 4,
          coefs: {
            "CC ECRIT": 1,
            "CC QCM": 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
        "ECUE TIM1 Anglais technique 1 CC": {
          coef: 3,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
        "ECUE CIE1 Anglais général 1 CC": {
          coef: 3,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            TOEIC: 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
      },
    },
    S2: {
      "UE MATH2 Mathématiques 2": {
        "ECUE MATH2 Mathématiques 2 CC": {
          coef: 1,
          coefs: {
            "CC QCM": 2,
            TD: 2,
            "CC ECRIT": 3,
            PARTIEL: 5,
          },
        },
      },
      "UE ALGO2 Algorithmique 2": {
        "ECUE ALGO2 Algorithmique 2 CC": {
          coef: 1,
          coefs: {
            "CC QCM": 2,
            DM: 2,
            "CC ECRIT": 3,
            PARTIEL: 5,
          },
        },
      },
      "UE IP2 Informatique pratique 2": {
        "ECUE PROG2 Programmation 2 CC": {
          coef: 4,
          coefs: {
            "CC Suivi": 1,
            "CC ECRIT": 2,
            PARTIEL: 3,
          },
        },
        "ECUE PROJ2 Projet 2 CC": {
          coef: 3,
          coefs: {
            PROJET: 1,
            PARTIEL: 2,
          },
        },
      },
      "UE SI2 Sciences de l'ingénieur 2 -": {
        "ECUE NTS2 Nouvelles Technologies et Société 2 CC": {
          coef: 1,
          coefs: {
            "CC QCM": 1,
            "CC Suivi": 2,
          },
        },
        "ECUE PHYS/ELEC2 Physique-Electronique 2 CC": {
          coef: 2,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            PARTIEL: 2,
          },
        },
        "ECUE ADO2 Architecture 2 CC": {
          coef: 2,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            PARTIEL: 2,
          },
        },
      },
      "UE SH2 Sciences humaines 2": {
        "ECUE TE2 Techniques d'expression 2 CC": {
          coef: 4,
          coefs: {
            "CC ECRIT": 1,
            "CC QCM": 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
        "ECUE TIM2 Anglais technique 2 CC": {
          coef: 3,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
        "ECUE CIE2 Anglais général 2 CC": {
          coef: 3,
          coefs: {
            "CC QCM": 1,
            "CC ECRIT": 1,
            TOEIC: 1,
            "CC Suivi": 2,
            PARTIEL: 3,
          },
        },
        "ECUE ANAC2 CC": {
          coef: 2,
          coefs: {
            "ANAC PREPA": 1,
          },
        },
      },
    },
  };

  static computeUePersonalMean(ue: PegasusUe) {
    let [count, tot]: [number, number] = [0, 0];

    Object.keys(ue).forEach((ecueName) => {
      count += ue[ecueName].personalMean * ue[ecueName].coef;
      tot += ue[ecueName].coef;
    });

    // round the result to 2 digits
    return Math.round((count / tot) * 100) / 100;
  }

  static computeUeClassMean(ue: PegasusUe) {
    let [count, tot]: [number, number] = [0, 0];

    Object.keys(ue).forEach((ecueName) => {
      count += ue[ecueName].classMean * ue[ecueName].coef;
      tot += ue[ecueName].coef;
    });

    // round the result to 2 digits
    return Math.round((count / tot) * 100) / 100;
  }

  static roundGrade(grade: number): string {
    // round the result to 2 digits
    return grade.toFixed(2).replace(/^\d\./, "0$&");
  }

  /**
   * Compute the personnal and class means of the input grades.
   * @param grades The input grades to compute the personnal and class means.
   */
  static computeMeans(grades: PegasusParsedGrades): PegasusParsedGrades {
    Object.keys(grades).forEach((ueName) => {
      Object.keys(grades[ueName]).forEach((ecueName) => {
        // compute the ecue means
        let counts: CountsType = {
          personnal: {},
          class: {},
        };

        grades[ueName][ecueName].grades.forEach((grade) => {
          // init with default value if empty
          if (!counts.personnal[grade.evaluation_type_de_note_id]) {
            counts.personnal[grade.evaluation_type_de_note_id] = {
              count: 0,
              tot: 0,
            };
            counts.class[grade.evaluation_type_de_note_id] = {
              count: 0,
              tot: 0,
            };
          }
          // personnal mean
          if (!isNaN(grade.mark_note)) {
            counts.personnal[grade.evaluation_type_de_note_id].count +=
              (grade.mark_note / grade.mark_on) * 20 * grade.evaluation_coef;
            counts.personnal[grade.evaluation_type_de_note_id].tot +=
              grade.evaluation_coef;
          }

          // class mean
          if (!isNaN(grade.mark_avg)) {
            counts.class[grade.evaluation_type_de_note_id].count +=
              (grade.mark_avg / grade.mark_on) * 20 * grade.evaluation_coef;
            counts.class[grade.evaluation_type_de_note_id].tot += grade.evaluation_coef;
          }
        });

        let [ecuePersonnalCount, ecueClassCount, ecueTot] = [0, 0, 0];

        Object.keys(counts.personnal).forEach((gradeId) => {
          const coef = grades[ueName][ecueName].coefs[gradeId];

          ecuePersonnalCount +=
            (counts.personnal[gradeId].count / counts.personnal[gradeId].tot) * coef;
          ecueClassCount +=
            (counts.class[gradeId].count / counts.class[gradeId].tot) * coef;
          ecueTot += coef;
        });

        grades[ueName][ecueName].personalMean =
          Math.round((ecuePersonnalCount / ecueTot) * 100) / 100;

        grades[ueName][ecueName].classMean =
          Math.round((ecueClassCount / ecueTot) * 100) / 100;
      });
    });

    return grades;
  }

  /**
   * Parse grades return fro the api depending on a given schemas
   * @param grades The input grades to parse
   * @param schemasId The schema id you want to use
   * @returns The parsed grades
   */
  static parseGrades(grades: PegasusGrades, schemasId: SchemasId): PegasusParsedGrades {
    const selectedSchemas = this.Schemas[schemasId];

    const datas: PegasusGrade[] = [];

    Object.keys(grades).forEach((ecueName) => {
      Object.keys(grades[ecueName]).forEach((gradeName) => {
        datas.push(grades[ecueName][gradeName]);
      });
    });

    const output: PegasusParsedGrades = {};

    // add the ues
    Object.keys(selectedSchemas).forEach((ueName) => {
      output[ueName] = {};

      // add the ecues
      Object.keys(selectedSchemas[ueName]).forEach((ecueName) => {
        output[ueName][ecueName] = {
          coef: selectedSchemas[ueName][ecueName].coef,
          coefs: selectedSchemas[ueName][ecueName].coefs,
          personalMean: 0,
          classMean: 0,
          grades: datas
            .filter((grade) => grade.module_nom.trim() === ecueName)
            .map((grade) => ({
              mark_id: grade.mark_id,
              evaluation_id: grade.evaluation_id,
              module_id: grade.module_id,
              module_nom: grade.module_nom,
              evaluation_libelle: grade.evaluation_libelle,
              evaluation_expected_date: grade.evaluation_expected_date,
              evaluation_effective_date: grade.evaluation_effective_date,
              evaluation_type_de_note_id: grade.evaluation_type_de_note_id,
              evaluation_type_de_note_libelle: grade.evaluation_type_de_note_libelle,
              evaluation_coef: parseFloat(grade.evaluation_coef),
              mark_note: parseFloat(grade.mark_note),
              mark_min: parseFloat(grade.mark_min),
              mark_max: parseFloat(grade.mark_max),
              mark_avg: parseFloat(grade.mark_avg),
              mark_on: parseFloat(grade.mark_on),
              effectif: parseInt(grade.effectif),
            })),
        };
      });
    });

    return this.computeMeans(output);
  }
}

export default PegasusSchemas;

export type { PegasusParsedGrades, PegasusUe, PegasusEcue, SchemasId };
