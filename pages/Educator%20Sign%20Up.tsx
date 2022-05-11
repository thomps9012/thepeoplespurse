import { gql, useQuery } from '@apollo/client'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import LoggedOut from '../components/loggedOut';
import { useState } from 'react';

const GET_USER = gql`
query Query {
    getUser {
      _id
      first_name
      last_name
      email
    }
  }
`;
export default function EducatorSignUp() {
    const { loading, error, data } = useQuery(GET_USER);
    const user = data?.getUser;
   
    const [formState, setFormState] = useState({
        educator_id: '',
        first_name: '',
        last_name: '',
        email: '',
        school_name: '',
        school_address: '',
        school_state: '',
        position: ''
    })
    
    if (loading) return <Skeleton />;
    if (error) {
        return <LoggedOut />
    }
    if(user){
        const { first_name, last_name, email, _id } = user;
        setFormState({
            ...formState,
            educator_id: _id,
            first_name: first_name,
            last_name: last_name,
            email: email
        })
   } else {
        return <LoggedOut />
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const sendEmail = async (formState: {}) => {
        const body = JSON.stringify(formState)
        const res = await fetch('/api/educatorSignUp', {
            method: 'POST',
            body: body
        }); if (res.ok) {
            confirm('You successfully requested educator access. One of our representatives will be in touch soon.')
            window.location.assign('/profile')
        } else {
            confirm('Your submission was unsuccessfull \n \n Please try submitting again later.')
            window.location.assign('/profile')
        }
    }
    return (
        <>
            <TextField
                name='school_name'
                id="outlined-basic"
                label="School Name"
                required
                placeholder='School Name'
                variant='outlined'
                margin='normal'
                onChange={handleChange}
            />
            {/* formatting on next two fields */}
            <TextField
                name='school_address'
                id="outlined-basic"
                label="School Address"
                required
                placeholder='School Address'
                variant='outlined'
                margin='normal'
                onChange={handleChange}
            />
            <TextField
                name='school_state'
                id="outlined-basic"
                label="School State"
                required
                placeholder='School State'
                variant='outlined'
                margin='normal'
                onChange={handleChange}
            />
            <TextField
                name='position'
                id="outlined-basic"
                label="Position"
                required
                placeholder='Position'
                variant='outlined'
                margin='normal'
                onChange={handleChange}
            />
            <Button id='btn' onClick={sendEmail} size='large'>
                Request Educator Access
            </Button>
        </>
    )
}