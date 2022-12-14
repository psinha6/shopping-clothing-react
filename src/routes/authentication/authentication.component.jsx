import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
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

    return (
        <div className='authenticaion-container'>
            {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;