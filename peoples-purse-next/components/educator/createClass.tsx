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
        <form
            onSubmit={(e: any) => {
                e.preventDefault();
                createClass({
                    variables: {
                        classCode: classCode
                    }
                })
            }}>
            <label>Class Code</label>
            <input onChange={(e: any) => setClassCode(e.target.value)} />
            <button type='submit'>
                Create Class
            </button>
        </form>
    )
}