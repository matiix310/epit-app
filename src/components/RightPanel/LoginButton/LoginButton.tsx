import React, { useEffect, useState } from "react";
import "./LoginButton.css";

// logo
import microsoftLogo from "@assets/microsoft.png";
import forgeLogo from "@assets/forge.png";

// utils
import * as microsoftApi from "@utils/microsoft";

type Props = {
  authType: "microsoft" | "forge";
};

function LoginButton({ authType }: Props) {
  // const [searching, setSearching] = useState(false);
  const [username, setUsername] = useState("");

  const images = {
    microsoft: microsoftLogo,
    forge: forgeLogo,
  };

  useEffect(() => {
    if (authType === "microsoft") {
      const microsoft_access_token = window.sessionStorage.getItem(
        "microsoft_access_token"
      );
      const microsoft_username = window.sessionStorage.getItem("microsoft_username");
      if (microsoft_username) {
        setUsername(microsoft_username);
      } else if (microsoft_access_token) {
        microsoftApi
          .getUserInfo(window.sessionStorage.getItem("microsoft_access_token")!)
          .then((userInfo) => {
            setUsername(userInfo.email);
            window.sessionStorage.setItem("microsoft_username", userInfo.email);
          });
      }
    }
  }, [authType]);
  // check for microsoft authentification

  const isConnected = (): boolean => {
    // microsoft auth
    if (authType === "microsoft") {
      // get the microsoft_access_token and return true if it exist
      return window.sessionStorage.getItem("microsoft_access_token") !== null;
    } else if (authType === "forge") {
      // get the forge_access_token
      return username !== "";
    }

    return false;
  };

  const loginButtonHandle = () => {
    if (authType === "microsoft") {
      if (isConnected()) {
        // microsoft logout
        setUsername("");
        window.sessionStorage.removeItem("microsoft_access_token");
      } else {
        // microsoft authentification
        const microsoftAuthUrl = `https://login.microsoftonline.com/${process.env.REACT_APP_MICROSOFT_TENANT_ID}/oauth2/v2.0/authorize?
                    client_id=${process.env.REACT_APP_MICROSOFT_CLIENT_ID}&
                    response_type=token+id_token&
                    response_mode=fragment&
                    redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&
                    scope=openid&
                    nonce=000042
                    state=0000`;

        window.location.assign(encodeURI(microsoftAuthUrl));
      }
    } else if (authType === "forge") {
      if (isConnected()) {
        // microsoft unauthentification
        setUsername("");
      } else {
        // microsoft authentification
        setUsername("lucas.stephan");
      }
    }
  };

  return (
    <>
      <div className="login-button">
        <img src={images[authType]} alt={authType + "icon"} />
        <div className="txt-container">
          <h1>{username === "" ? "Non connecté" : username}</h1>
          <h1 onClick={loginButtonHandle} className={isConnected() ? "red" : "yellow"}>
            {isConnected() ? "Se déconnecter" : "Se connecter"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default LoginButton;
