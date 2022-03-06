import { useMutation, gql } from "@apollo/client"
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';

const TAKE_ACTION = gql`
mutation Mutation($input: TakeAction!) {
    takeAction(input: $input)
  }
`;


export default function TakeAction() {
    const [takeAction, { loading, error }] = useMutation(TAKE_ACTION);
    const [formState, setFormState] = useState({
        name: '',
        detail: '',
        organization: '',
        length: 0.0,
        action_date: new Date(),
        contact: ''
    })
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'length') {
            setFormState({
                ...formState,
                [name]: parseFloat(value)
            })
        } else if (name === 'action_date') {
            setFormState({
                ...formState,
                [name]: new Date(value)
            })
        } else {
            setFormState({
                ...formState,
                [name]: value
            })
        }
    }
    useEffect(() => {
        const { name, detail, organization, length, contact } = formState;
        if (name === '') {
            setErrorMsg('Please Name Your Action');
            return;
        } else if (detail === '') {
            setErrorMsg('Please enter details about your action');
            return;
        } else if (organization === '') {
            setErrorMsg(`Please enter an organization you worked with or 'None'`);
            return;
        } else if (length === 0.0) {
            setErrorMsg('Please enter the length of your action');
            return;
        } else if (contact === '') {
            setErrorMsg('Please enter a contact person to verify your action');
            return;
        } else {
            setErrorMsg('')
        }
    }, [formState])

    const submitAction = async (e: any) => {
        e.preventDefault();
        if (errorMsg != '') {
            alert(errorMsg)
        } else {
            try {
                const actionResponse = await takeAction({
                    variables: {
                        input: {
                            name: formState.name,
                            detail: formState.detail,
                            organization: formState.organization,
                            length: formState.length,
                            action_date: formState.action_date,
                            contact: formState.contact
                        }
                    }
                })
                const actionID = actionResponse.data.takeAction
                console.log(actionID)
                if (actionID) {
                    alert('Your action has been recorded successfully')
                    window.location.assign('/Profile')
                }
            }
            catch {
                if (error) {
                    const errorAlert = error?.message
                    alert(errorAlert)
                }
            }
        }
    }
    if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here to record your awesome action... 🛠 </h1>;
    return (
        <div style={{ margin: 50, marginBottom: 100 }} className='container'>
            <div>
                <a id='volunteerLink' href="https://www.volunteermatch.org/" target="_blank" rel="noopener noreferrer">
                    <h2>
                        Looking for Volunteer Opportunities and Ideas?
                    </h2>
                    <i id='volunteerIcon' className='material-icons'>volunteer_activism</i>
                </a>
            </div>
            <FormControl fullWidth>
                <TextField
                    name='name'
                    required
                    label='Action Description'
                    margin='normal'
                    onChange={handleChange}
                />
                <TextField
                    name='detail'
                    required
                    label='Detailed Description'
                    multiline
                    margin='normal'
                    onChange={handleChange}
                />
                <TextField
                    name='length'
                    required
                    label='Action Length'
                    type='number'
                    margin='normal'
                    onChange={handleChange}
                />
                <TextField
                    name='date'
                    required
                    type='datetime-local'
                    margin='normal'
                    helperText='Action Date / Time'
                    onChange={handleChange}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        name='organization'
                        label='Organization'
                        margin='normal'
                        helperText='Not Required'
                        style={{marginRight: 5}}
                        onChange={handleChange}
                        fullWidth
                        />
                    <TextField
                        name='contact'
                        label='Contact'
                        required
                        margin='normal'
                        helperText='Family Members Count'
                        style={{marginLeft: 5}}
                        fullWidth
                        onChange={handleChange}
                    />
                </div>
            </FormControl>
            <div style={{ margin: 30, display: 'flex', justifyContent: 'center' }}>
                <Button id='btn' onClick={submitAction}>
                    <i className='material-icons left'>done</i>
                    Record Civic Action

                </Button>
            </div>
        </div>
    )
}