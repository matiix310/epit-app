
const getUserInfo = async (microsoft_access_token: string) => {
    const res = await fetch(
        `https://graph.microsoft.com/oidc/userinfo`,
        {
            headers: {
                'Authorization': 'Bearer ' + microsoft_access_token
            }
        }
    );

    const userInfo = await res.json();

    // console.log(userInfo);

    return userInfo;
}

export {
    getUserInfo
}