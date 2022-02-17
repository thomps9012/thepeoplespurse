import {
    useMutation, gql
} from '@apollo/client';
import { useState } from 'react';

const CREATE_CLASS = gql`
mutation CreateClass($classCode: String!) {
    createClass(class_code: $classCode)
  }
`;
export default function CreateClass() {
    const [createClass, { loading, error }] = useMutation(CREATE_CLASS);
    const [classCode, setClassCode] = useState('')
    if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center'}}>🛠 Give us just a minute here... 🛠 </h1>;
    if (error) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center'}}>
        Submission error! {error.message};
    </h1>
    return (
        <div style={{ margin: 15, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className='col s6'>
                <label>Class Code</label>
                <input onChange={(e: any) => setClassCode(e.target.value)} />
            </div>
            <div style={{ justifyContent: 'center', display: 'flex', margin: 5}}>

                <a
                    id='btn'
                    className='waves-effect btn-large'
                    onClick={(e: any) => {
                        e.preventDefault();
                        createClass({
                            variables: {
                                classCode: classCode
                            }
                        }).then(data => {
                            if (data.data.createClass != '' || null) {
                                M.toast({ html: 'Successfully Created Class' })
                                window.location.reload();
                            } else {
                                M.toast({ html: 'Error Creating Class' })
                            }
                        })
                    }}>
                    Create Class
                </a>
            </div>
        </div>
    )
}