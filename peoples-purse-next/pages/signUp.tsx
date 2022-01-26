import {
    useMutation,
    gql
} from '@apollo/client';
import { useState } from 'react';

const SIGN_UP = gql`
mutation Mutation($input: UserSignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`

export default function SignUp() {
    const [signUp, { data, loading, error }] = useMutation(SIGN_UP);
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <>
            <form
                onSubmit={async (e: any) => {
                    e.preventDefault();
                    const signUpResponse = await signUp({
                        variables: {
                            input: {
                                first_name: formState.first_name,
                                last_name: formState.last_name,
                                email: formState.email,
                                username: formState.username,
                                password: formState.password
                            }
                        }
                    })
                    const token = signUpResponse.data.signUp.token
                    if(token){
                        localStorage.setItem('auth_token', token)
                        window.location.assign('/profile')
                    }
                }}
                className="signupForm"
            >
                <h3>Personal Information</h3>
                <label>First Name</label>
                <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    onChange={handleChange}
                />
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    id='password'
                    onChange={handleChange}
                />
                <button
                    type='submit'
                >
                    Sign Up
                </button>
            </form>
        </>
    )
}