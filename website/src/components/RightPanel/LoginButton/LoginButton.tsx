import React, {useState} from 'react'
import './LoginButton.css'

// logo
import microsoftLogo from '@assets/microsoft.png'
import forgeLogo from '@assets/forge.png'

type Props = {
    authType: 'microsoft' | 'forge'
}

function LoginButton({authType}: Props) {

    const [searching, setSearching] = useState(false);
    const [username, setUsername] = useState('');

    const images = {
        'microsoft': microsoftLogo,
        'forge': forgeLogo,
    }

    const isConnected = username !== '';

    const loginButtonHandle = () => {
        if (authType === 'microsoft') {
            if (isConnected) {
                // microsoft unauthentification
                setUsername('');
            } else {
                // microsoft authentification
                setUsername('lucas.stephan@epita.fr');
            }
        }

        else if (authType === 'forge') {
            if (isConnected) {
                // microsoft unauthentification
                setUsername('');
            } else {
                // microsoft authentification
                setUsername('lucas.stephan');
            }
        }
    }

    return (
        <>
            <div className="login-button">
                <img src={images[authType]} alt={authType + 'icon'} />
                <div className="txt-container">
                    <h1>{username === '' ? 'Non connecté' : username}</h1>
                    <h1 onClick={loginButtonHandle} className={isConnected ? 'red' : 'yellow'}>{isConnected ? 'Se déconnecter' : 'Se connecter'}</h1>
                </div>
            </div>
        </>
    )
}

export default LoginButton