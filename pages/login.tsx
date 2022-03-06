import {
    useMutation,
    gql
} from '@apollo/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { validateEmail } from '../utils/helpers';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

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
        password: '',
        showPassword: false
    })

    const ShowPassword = () => {
        setFormState({ ...formState, showPassword: !formState.showPassword })
    }
    const MouseDownPW = (e: any) => {
        e.preventDefault();
    }
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    useEffect(() => {
        const { email, username } = formState;
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
            alert(errorMsg)
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
                    window.location.assign('/Profile')
                }
            } catch {
                if (error) {
                    const errorAlert = error?.message
                    alert(errorAlert)
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
                <TextField
                    name='username'
                    id="outlined-basic"
                    label="Username"
                    required
                    placeholder='Username'
                    variant='outlined'
                    margin='normal'
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <AccountCircle />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    name='email'
                    id="outlined-basic"
                    label="Email Address"
                    required
                    placeholder='Email Address'
                    variant='outlined'
                    margin='normal'
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Email />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    name='password'
                    id="outlined-basic"
                    label="Password"
                    required
                    placeholder='********'
                    variant='outlined'
                    margin='normal'
                    type={formState.showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <Lock onClick={ShowPassword} onMouseDown={MouseDownPW} />
                            </InputAdornment>
                        )
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: 20, padding: 10, flexDirection: 'column' }}>
                        <Button id='btn' onClick={loginFunc} size='large'>
                            Login
                        </Button>
                        <h2 style={{ textAlign: 'center' }}> - or - </h2>
                        <Link href='/signUp'>
                            <Button id='btn' className='signupLoginToggle'>
                                New User?
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}