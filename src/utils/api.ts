
// PEGASUS

type PegasusGrade = {
    "mark_id": string,
    "evaluation_id": string,
    "module_id": string,
    "module_nom": string,
    "evaluation_libelle": string,
    "evaluation_expected_date": string,
    "evaluation_effective_date": string,
    "evaluation_type_de_note_id": string,
    "evaluation_type_de_note_libelle": string,
    "evaluation_coef": string,
    "mark_note": string,
    "mark_min": string,
    "mark_max": string,
    "mark_avg": string,
    "mark_on": string,
    "effectif": string,
}

type PegasusGrades = {
    [key: string] : {
        [key: string] : PegasusGrade
    }
}

class PegasusApi {

    static async getGrades(microsoft_access_token: string): Promise<PegasusGrades> {
        console.log(`[REQUEST] pegasus grades`);
        const res = await fetch(`${process.env.REACT_APP_API_HOST}pegasus?microsoft_access_token=${microsoft_access_token}`)
        return await res.json();
    }
}

export {
    PegasusApi
};

export type { 
    PegasusGrades,
    PegasusGrade
};
