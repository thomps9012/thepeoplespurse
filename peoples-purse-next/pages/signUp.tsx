import {
    useMutation,
    gql
} from '@apollo/client';
import Link from 'next/link';
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
        const {first_name, last_name, username, email, password} = formState
        if (!first_name) {
            setErrorMsg("Don't forget to enter your First Name");
            return;
        } else if (!last_name) {
            setErrorMsg("Don't forget to enter your Last Name");
            return;
        } else if (!username) {
            setErrorMsg('Please enter a valid Username');
            return;
        } else if (!validateEmail(email)) {
            setErrorMsg('Please enter a valid Email');
            return;
        } else if (!checkPassword(password)) {
            setErrorMsg(`Don't Forget a secure password for your account`);
            return;
        } else {
            setErrorMsg('');
        }
    }, [formState])

    const signUpFunc = async (e: any) => {
        e.preventDefault();
        if (errorMsg != '') {
            M.toast({ html: errorMsg, classes: 'rounded' })
        } else {
            try{

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
            } catch {
                if(error){
                    const errorAlert = error?.message 
                    M.toast({ html: errorAlert })
                }
            }
        }
    }

    if (loading) return <h1 id='loading' style={{margin: 35, padding: 35, textAlign: 'center'}}>🛠 Give us just a minute here... 🛠 </h1>;
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
                        placeholder='Min length 8 with one special char'
                        minLength={8}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 10 }}>
                    <a id='btn'
                        className='waves-effect btn-large'
                        onClick={signUpFunc}
                    >
                        <i className='material-icons right'>login</i>
                        Sign Up
                    </a>
                    <h6 className='signupLoginToggle' id='toggleLink'>
                        <Link href='/login'>Returning User?</Link>
                    </h6>
                </div>
            </form>
        </div>
    )
}