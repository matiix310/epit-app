import { PegasusGrade, PegasusGrades } from "./api";

type PegasusSchemaType = {
    /**
     * UE name
     */
    [key: string]: {
        /**
         * ECUE name
         */
        [key: string]: {
            "coef": number
        }
    }
}

type PegasusParsedGrades = {
    /**
     * UE name
     */
    [key: string]: {
        /**
         * ECUE name
         */
        [key: string]: {
            "coef": number,
            "grades": PegasusGrade[]
        }
    }
}

type SchemasId = "S1";

class PegasusSchema {

    static Schemas: { [key: string]: PegasusSchemaType } = {
        "S1": {
            "UE MATH1 Mathématiques 1": {
                "ECUE MATH1 Mathématiques 1 CC": {
                    "coef": 1
                }
            },
            "UE ALGO1 Algorithmique 1": {
                "ECUE ALGO1 Algorithmique 1 CC": {
                    "coef": 1
                }
            },
            "UE IP1 Informatique pratique 1": {
                "ECUE PROG1 Programmation 1 CC": {
                    "coef": 1
                }
            },
            "UE SI1 Sciences de l'ingénieur 1": {
                "ECUE NTS1 Nouvelles Technologies et Société 1 CC": {
                    "coef": 1
                },
                "ECUE PHYS/ELEC1 Physique - Electronique 1 CC": {
                    "coef": 2
                },
                "ECUE ADO1 Architecture 1 CC": {
                    "coef": 2
                }
            },
            "UE SH1 Sciences humaines 1": {
                "ECUE TE1 Technique d'expression 1 CC": {
                    "coef": 4
                },
                "ECUE TIM1 Anglais technique 1 CC": {
                    "coef": 3
                },
                "ECUE CIE1 Anglais général 1 CC": {
                    "coef": 3
                }
            }
        }
    }

    /**
     * Parse grades return fro the api depending on a given schemas
     * @param grades The input grades to parse
     * @param schemasId The schema id you want to use
     * @returns The parsed grades
     */
    static parseGrades(grades: PegasusGrades, schemasId: SchemasId): PegasusParsedGrades {
        const selectedSchemas = PegasusSchema.Schemas[schemasId];

        const datas: PegasusGrade[] = []

        Object.keys(grades).forEach(ecueName => {
            Object.keys(grades[ecueName]).forEach(gradeName => {
                datas.push(grades[ecueName][gradeName]);
            })
        })

        const output: PegasusParsedGrades = {}

        // add the ues
        Object.keys(selectedSchemas).forEach(ueName => {
            output[ueName] = {}

            // add the ecues
            Object.keys(selectedSchemas[ueName]).forEach(ecueName => {
                output[ueName][ecueName] = {
                    coef: selectedSchemas[ueName][ecueName].coef,
                    grades: datas.filter(grade => grade.module_nom.trim() === ecueName)
                }
            })
        })

        return output;
    }
}

export {
    PegasusSchema
};

export type {
    PegasusParsedGrades
};
