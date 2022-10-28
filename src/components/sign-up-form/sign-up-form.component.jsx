import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    console.log(defaultFormFields)
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                await createDocumentFromAuth(user, { displayName });
                resetFormFields();
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot create user, email already in use');
                }
                console.log('user creation encountered an error', error);
            }
        } else {
            alert('Passwords do not match');
        }
    }
    return (
        <div className="sign-up-container">
            <h1>Don't have an account?</h1>
            <span>Sign Up with Email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;