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
        const joinClassReponse = await joinClass({
            variables: {
                classCode: classCode
            }
        })
        let joinedClassId = joinClassReponse.data.joinClass._id
        if (joinedClassId != null) {
            window.location.assign('/profile')
        }
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
        <div className="joinClassContainer" style={{ marginTop: 50, marginBottom: 50, padding: 10, textAlign: "center" }}>
            <h5>Select Your Class from the List Below</h5>
            <div style={{ padding: 50 }}>
                <select onChange={handleChange}>
                    {classes.map((classInfo: any) => {
                        return (
                            <option key={classInfo._id} value={classInfo.class_code}>{classInfo.class_code}</option>
                        )
                    })}
                </select>
            </div>
            <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
                <a id='btn'
                    className="waves-effect btn-large"
                    onClick={joinClassSubmit}
                    type="submit">
                    Join Class
                </a>
            </div>

        </div>
    )
}