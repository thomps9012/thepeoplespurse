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
    if (loading) return <>
        'Submitting...';
    </>
    if (error) return <>
        `Submission error! ${error.message}`;
    </>
    return (
        <div style={{ margin: 10, justifyContent: 'center' }}>
            <div className='col s6'>
                <label>Class Code</label>
                <input onChange={(e: any) => setClassCode(e.target.value)} />
            </div>
            <div className='col s6'>

                <a className='waves-effect indigo darken-4 btn-large'
                    onClick={(e: any) => {
                        e.preventDefault();
                        createClass({
                            variables: {
                                classCode: classCode
                            }
                        }).then(data => {
                            if(data.data.createClass != '' || null){
                                M.toast({html: 'Successfully Created Class'})
                                window.location.reload();
                            } else {
                                M.toast({html: 'Error Creating Class'})
                            }
                        })
                    }}>
                    Create Class
                </a>
            </div>
        </div>
    )
}