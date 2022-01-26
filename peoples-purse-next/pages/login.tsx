import {
    useMutation,
    gql
} from '@apollo/client';
import { useState } from 'react';

const LOGIN = gql`
mutation CreateClass($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
export default function Login() {
    const [login, { data, loading, error }] = useMutation(LOGIN);
    const [formState, setFormState] = useState({
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
    return (
        <form
            onSubmit={async (e: any) => {
                e.preventDefault();
                const loginResponse = await login({
                    variables: {
                        input: {
                            email: formState.email,
                            username: formState.username,
                            password: formState.password
                        }
                    }
                })
                const token = loginResponse.data.login.token
                if (token) {
                    localStorage.setItem('auth_token', token)
                    window.location.assign('/profile')
                }
            }}
            className="signupForm"
        >
            <div className="loginForm">
                <h3>Personal Information</h3>
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
                    Login
                </button>
            </div>
        </form>
    )
}