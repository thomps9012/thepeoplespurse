import {
    useMutation,
    gql
} from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { validateEmail } from '../utils/helpers';

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
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    useEffect(() => {
        const {email, username} = formState;
        if (!validateEmail(email)) {
            setErrorMsg('Please enter your Email');
            return;
        } else if (!username) {
            setErrorMsg('Please enter your Username');
            return;
        } else {
            setErrorMsg('')
        }
    }, [formState])
    const loginFunc = async (e: any) => {
        e.preventDefault();
        if (errorMsg != '') {
            M.toast({ html: errorMsg, classes: 'rounded' })
        } else {
            try {

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
    if (loading) {
        return (
            <div style={{ margin: 37, padding: 47, textAlign: 'center' }}>
                <h1 >Something seems to have gone wrong here... </h1>
                <a
                    id='btn'
                    className='waves-effect btn-large'
                    onClick={() => window.location.reload()}
                >
                    Login Again
                </a>
            </div>
        )
    }
    return (
        <div className='loginContainer'>
            <form
                className="loginForm"
            >
                <div className="loginInputs">
                    <div className='input-field col s6'>
                        <i className='material-icons prefix'>account_circle</i>

                        <input
                            placeholder='Username'
                            className='validate'
                            type='text'
                            name='username'
                            id='username'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-field col s6'>
                        <i className='material-icons prefix'>email</i>
                        <input
                            className='validate'
                            type='text'
                            name='email'
                            id='email'
                            required
                            placeholder='Email Address'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-field col s6'>
                        <i className='material-icons prefix'>lock_open</i>
                        <input
                            placeholder='Your Password'
                            className='validate'
                            type='password'
                            name='password'
                            id='password'
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <a
                        id='btn'
                        className='waves-effect btn-large'
                        onClick={loginFunc}
                    >
                        <i className='material-icons right'>login</i>
                        Login
                    </a>
                    <h6 className='signupLoginToggle' id='toggleLink'>
                        <Link href='/signUp'>
                            New User?
                        </Link>
                    </h6>
                </div>
            </form>
        </div>
    )
}