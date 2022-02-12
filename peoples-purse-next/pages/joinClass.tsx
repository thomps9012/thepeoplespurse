import { useMutation, useQuery, gql } from "@apollo/client"
import { useEffect, useState } from "react";


const JOIN_CLASS = gql`
mutation Mutation($classCode: String!) {
    joinClass(class_code: $classCode) {
      _id
    }
  }
`;

const GET_CLASSES = gql`
query Query {
    allClasses {
      _id
      class_code
    }
  }
`

export default function JoinClass() {
    const [joinClass] = useMutation(JOIN_CLASS)
    const [classCode, setClassCode] = useState('')
    const { loading, data, error } = useQuery(GET_CLASSES);

    const joinClassSubmit = async () => {
        await joinClass({
            variables: {
                classCode: classCode
            }
        })
        // build in conditional logic for successful submission
        // if () {
        // alert(`You've successfully joined class: ${classCode}`)
        // window.location.reload();
        // }
    }

    const handleChange = (e: any) => {
        setClassCode(e.target.value)
    }
    useEffect(() => {
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('select');
            const instances = M.FormSelect.init(elems);
        };
        init();
    });
    if (loading) return <p>Loading...</p>;
    if (error) return JSON.stringify(error)
    console.log(data)
    const classes = data.allClasses;
    console.log(classes)
    return (
        <div className="container" style={{ marginTop: 50, marginBottom: 50, padding: 10, textAlign: "center" }}>
            <h5>Select Your Class from the List Below</h5>
            <div>
                <select onChange={handleChange}>
                    {classes.map((classInfo: any) => {
                        return (
                            <option key={classInfo._id} value={classInfo._id}>{classInfo.class_code}</option>
                        )
                    })}
                </select>
            </div>
            <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
                <a className="waves-effect indigo darken-4 btn"
                    onClick={joinClassSubmit}
                    type="submit">
                    Join Class
                </a>
            </div>

        </div>
    )
}