import { useMutation, gql } from "@apollo/client"
import { useState } from "react";


const JOIN_CLASS = gql`
mutation Mutation($classCode: String!) {
    joinClass(class_code: $classCode) {
      _id
    }
  }
`;

export default function JoinClass() {
    const [joinClass, { loading, error }] = useMutation(JOIN_CLASS)
    const [classCode, setClassCode] = useState('')
    if (loading) return <p>Loading...</p>;
    if (error) return JSON.stringify(error)
   
    return (
        <>
            <form
                onSubmit={async (e: any) => {
                    e.preventDefault();
                    const classResponse = await joinClass({
                        variables: {
                            classCode: classCode
                        }
                    })
                    const classID = classResponse.data.joinClass;
                    console.log(classID)
                    if (classID) {
                        alert(`You've successfully joined class: ${classCode}`)
                        window.location.reload();
                    }
                }}>
                <label>Class Code</label>
                <input
                    type='text'
                    name='classCode'
                    onChange={(e: any) => setClassCode(e.target.value)}
                />
                <button
                    type="submit">
                        Join New Class
                    </button>
            </form>
        </>
    )
}