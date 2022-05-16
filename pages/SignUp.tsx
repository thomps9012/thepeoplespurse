import {
    useMutation,
    gql
} from '@apollo/client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';
import InputAdornment from '@mui/material/InputAdornment';
import Lock from '@mui/icons-material/Lock';
import Email from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
        password: '',
        showPassword: false
    });

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
        const { first_name, last_name, username, email, password } = formState
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
            alert(errorMsg)
        } else {
            try {

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
                if (error) {
                    const errorAlert = error?.message
                    alert(errorAlert)
                }
            }
        }
    }

    if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here... 🛠 </h1>;
    return (
        <div className='signUpContainer'>
            <form className='signUpForm'>
                <TextField
                    name='first_name'
                    id="outlined-basic"
                    label="First Name"
                    required
                    placeholder='First Name'
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
                    name='last_name'
                    id="outlined-basic"
                    label="Last Name"
                    required
                    placeholder='Last Name'
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
                <label style={{ textAlign: 'center' }}>Minimum length 8 characters with one special character</label>
                <div style={{ display: 'flex', justifyContent: 'center', margin: 20, padding: 10, flexDirection: 'column' }}>
                    <Button id='btn' onClick={signUpFunc} size='large'>
                        Sign Up
                    </Button>
                    <h2 style={{textAlign: 'center'}}> - or - </h2>
                    <Link href='/login' passHref>
                        <Button id='btn' className='signupLoginToggle'>
                            Returning User?
                        </Button>
                    </Link>
                </div>
            </form >
        </div >
    )
}