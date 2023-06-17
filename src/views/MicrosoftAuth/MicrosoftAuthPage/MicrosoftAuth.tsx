import React from 'react'

function MicrosoftAuth() {

    const parsedHash = new URLSearchParams(
        window.location.hash.substring(1) // any_hash_key=any_value
    );

    if (parsedHash.has('access_token') && parsedHash.has('id_token')) {
        fetch(`http://localhost:8000/pegasus?microsoft_access_token=${parsedHash.get('access_token')}`,)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <>
        </>
    )
}

export default MicrosoftAuth