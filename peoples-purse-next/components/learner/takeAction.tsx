import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

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
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {JSON.stringify(error)}</p>

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if(name === 'length'){
            setFormState({
                ...formState,
                [name]: parseFloat(value)
            })
        } else if (name === 'action_date'){
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

    return (
        <>
            <h5>Time to Take Action</h5>

            <form
                onSubmit={async(e: any) => {
                    e.preventDefault();
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
                    if(actionID){
                        alert("Your action has been recorded successfully")
                        window.location.reload()}
                }}
                className="actionForm"
            >
                <div className="actionForm">
                    <label>Action Description</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={handleChange}
                    />
                    <label>Action Detail</label>
                    <input
                        type='text'
                        name='detail'
                        id='detail'
                        onChange={handleChange}
                    />
                    <label>Length of Action</label>
                    <input
                        type='float'
                        name='length'
                        id='length'
                        onChange={handleChange}
                    />
                    <label>Action Date</label>
                    <input
                        type='date'
                        name='action_date'
                        id='action_date'
                        onChange={handleChange}
                    />
                    <label>Affiliated Organization</label>
                    <input
                        type='string'
                        name='organization'
                        id='organization'
                        onChange={handleChange}
                    />
                    <label>Contact at Organization</label>
                    <input
                        type='string'
                        name='contact'
                        id='contact'
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">
                    Record Civic Action
                </button>
            </form>
        </>
    )
}