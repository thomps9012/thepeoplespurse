import { useQuery, useMutation, gql } from "@apollo/client"
import { useState } from "react";
import LoggedOut from "../loggedOut";

const GET_CLASSES = gql`
query Query {
    classes {
      _id
      class_code
    }
  }
`;

const JOIN_CLASS = gql`
mutation Mutation($classCode: String!) {
    joinClass(class_code: $classCode) {
      _id
    }
  }
`;

export default function JoinClass() {
    const { loading, data } = useQuery(GET_CLASSES);
    const [joinClass, { error }] = useMutation(JOIN_CLASS)
    const [classCode, setClassCode] = useState('')
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error)
        return <LoggedOut />
    }
    console.log(data)
    const classes = data.classes;
    return (
        <>
            <p>Your Classes</p>
            <ul>
                {classes.map((classDetail: any) => {
                    return (
                        <li key={classDetail._id}>{classDetail.class_code}</li>
                    )
                })}
            </ul>

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