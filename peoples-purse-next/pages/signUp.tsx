import {
    useMutation,
    gql
} from '@apollo/client';
import Head from 'next/head';
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
        <div className='container'>
            <Head>
                <title>the People's Purse</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
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
                    if (token) {
                        localStorage.setItem('auth_token', token)
                        window.location.assign('/profile')
                    }
                }}
                className="signupForm"
            >
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <label>First Name</label>
                    <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <label>Last Name</label>
                    <input
                        type='text'
                        name='last_name'
                        id='last_name'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <label>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>email</i>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>lock</i>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
                <a
                    className='waves-effect indigo darken-4 btn-large'
                    type='submit'
                >
                    <i className='material-icons right'>login</i>
                    Sign Up
                </a>
                <h6>
                <a href='/login'>Returning User?</a>
                </h6>
            </div>
        </div>
    )
}