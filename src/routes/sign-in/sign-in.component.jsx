// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // useEffect(() => {
    //     async function fetchData () {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response) {
    //             const userDocRef = await createDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(response.user);
        console.log(response);
    }
    return (
        <div>
            <h1>
                Sign In Page
            </h1>
            <button onClick={logGoogleUser}>SignIn with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;