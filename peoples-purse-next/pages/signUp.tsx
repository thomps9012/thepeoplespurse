import {
    useMutation,
    gql
} from '@apollo/client';
import { useEffect, useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

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
    });
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        if (!formState.first_name) {
            setErrorMsg("Don't forget to enter your First Name");
            return;
        } else if (!formState.last_name) {
            setErrorMsg("Don't forget to enter your Last Name");
            return;
        } else if (!formState.username) {
            setErrorMsg('Please enter a valid Username');
            return;
        } else if (!validateEmail(formState.email)) {
            setErrorMsg('Please enter a valid Email');
            return;
        } else if (!checkPassword(formState.password)) {
            setErrorMsg('Please choose a more secure password for your account');
            return;
        } else {
            setErrorMsg('');
        }
    })

    const signUpFunc = async (e: any) => {
        e.preventDefault();
        if (errorMsg != '') {
            M.toast({ html: errorMsg, classes: 'rounded' })
        } else {
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
                sessionStorage.setItem('auth_token', token)
                window.location.assign('/profile')
            }
        }
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return (
        <div className='signUpContainer'>
            <form className='signUpForm'>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                        type='text'
                        name='first_name'
                        id='first_name'
                        required
                        placeholder='First Name'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                        type='text'
                        name='last_name'
                        id='last_name'
                        required
                        placeholder='Last Name'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        required
                        placeholder='Username'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>email</i>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        placeholder='Email Address'
                        size={30}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-field col s6'>
                    <i className='material-icons prefix'>lock</i>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password (8 character minimum with either a number or special character)'
                        minLength={8}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
                <a  id='btn'
                    className='waves-effect btn-large'
                    onClick={signUpFunc}
                >
                    <i className='material-icons right'>login</i>
                    Sign Up
                </a>
                <h6 className='signupLoginToggle'>
                    <a href='/login' className='toggleLink'>Returning User?</a>
                </h6>
            </div>
        </div>
    )
}