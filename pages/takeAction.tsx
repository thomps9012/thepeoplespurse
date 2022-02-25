import { useMutation, gql } from "@apollo/client"
import { useEffect, useState } from "react";

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
            M.toast({ html: errorMsg, classes: 'rounded' })
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
                    M.toast({ html: "Your action has been recorded successfully", classes: 'rounded' })
                    window.location.reload()
                }
            }
            catch {
                if (error) {
                    const errorAlert = error?.message
                    M.toast({ html: errorAlert })
                }
            }
        }
    }
    if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here to record your awesome action... 🛠 </h1>;
    return (
        <div style={{ marginTop: 20 }}>
            <div>
                <a id='volunteerLink' href="https://www.volunteermatch.org/" target="_blank" rel="noopener noreferrer">
                    <h5>
                        Looking for Volunteer Opportunities and Ideas?
                    </h5>
                    <i id='volunteerIcon' className='material-icons'>volunteer_activism</i>
                </a>
            </div>
            <form
                className="actionForm"
            >
                <div className="actionForm">
                    <div className="input-field">

                        <label>Action Description</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>Action Detail</label>
                        <textarea
                            className="materialize-textarea"
                            name='detail'
                            id='detail'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>Length of Action</label>
                        <input
                            type='number'
                            name='length'
                            id='length'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label>Action Date</label>
                    <input
                        type='date'
                        name='action_date'
                        id='action_date'
                        required
                        onChange={handleChange}
                    />
                    <div className="row">
                        <div className="input-field col s6">
                            <label>Affiliated Organization</label>
                            <input
                                type='text'
                                name='organization'
                                id='organization'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field col s6">
                            <label>Contact at Organization</label>
                            <input
                                type='text'
                                name='contact'
                                id='contact'
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div style={{ margin: 30, display: 'flex', justifyContent: 'center' }}>

                <a id='btn'
                    className='waves-effect btn-large'
                    onClick={submitAction}
                >
                    <i className='material-icons left'>done</i>
                    Record Civic Action
                </a>
            </div>
        </div>
    )
}