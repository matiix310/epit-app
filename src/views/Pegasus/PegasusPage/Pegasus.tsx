import React, { useEffect, useState } from 'react'

// styles
import './Pegasus.css'

// components
import RightPanel from '@components/RightPanel/RightPanel';
import Title from '@components/Title/Title';

// utils
import { PegasusApi } from '@utils/api';
import { PegasusParsedGrades, PegasusSchema } from '@utils/pegasusSchema';

function Pegasus() {

    const [grades, setGrades]: [PegasusParsedGrades, React.Dispatch<React.SetStateAction<PegasusParsedGrades>>] = useState({});

    useEffect(() => {
        // get the grades data
        const microsoft_access_token: string | null = sessionStorage.getItem('microsoft_access_token');
        if (microsoft_access_token) {
            // display the data
            PegasusApi.getGrades(microsoft_access_token)
            .then(gradesData => setGrades(PegasusSchema.parseGrades(gradesData, "S1")));
        }
    }, [])

    return (
        <>
            <RightPanel />
            <Title name="PEGASUS" />
            <div className="gradeContainer">
                {
                    Object.keys(grades).map(ecuename => {
                        return <h1>{ecuename}</h1>
                    })
                }
            </div>
        </>
    )
}

export default Pegasus