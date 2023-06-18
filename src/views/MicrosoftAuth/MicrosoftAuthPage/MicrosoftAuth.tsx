import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function MicrosoftAuth() {

    const parsedHash = new URLSearchParams(
        window.location.hash.substring(1) // any_hash_key=any_value
    );

    if (parsedHash.has('access_token') && parsedHash.has('id_token')) {
        // set the microsoft_access_token value in the sessionStorage
        window.sessionStorage.setItem('microsoft_access_token', parsedHash.get('access_token')!);
    }

    const navigate = useNavigate();

    // redirect to homepage
    useEffect(() => {
        navigate('/home');
    })

    return (
        <>
            Redirection en cours...
        </>
    )
}

export default MicrosoftAuth