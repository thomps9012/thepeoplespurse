import { useMutation, useQuery, gql } from "@apollo/client"
import { useState } from "react";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Skeleton from '@mui/material/Skeleton';


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
        class_code
        _id
    }
  }
`

export default function JoinClass() {
    const [joinClass] = useMutation(JOIN_CLASS)
    const [classCode, setClassCode] = useState('')
    const { loading, data, error } = useQuery(GET_CLASSES);

    const joinClassSubmit = async () => {
        try {

            const joinClassReponse = await joinClass({
                variables: {
                    classCode: classCode
                }
            })
            let joinedClassId = joinClassReponse.data.joinClass._id
            if (joinedClassId != null) {
                window.location.replace('/Profile')
            }
        } catch {
            alert(`${error?.message}`)
        }
    }

    const handleChange = (e: any) => {
        setClassCode(e.target.value)
    }
    if (loading) return <Skeleton />;
    const classes = data.allClasses;
    return (
        <div className="joinClassContainer" style={{ margin: 50, padding: 10, textAlign: "center" }}>
            <FormControl fullWidth>
                <InputLabel>Select a Class to Join from the List Below</InputLabel>
                <Select onChange={handleChange} label='Select a Class to Join from the List Below'>
                    {classes.map((classInfo: any) => {
                        const { _id, class_code } = classInfo;
                        return (
                            <MenuItem key={_id} value={class_code}>{class_code}</MenuItem>
                        )
                    })}
                </Select>
                <div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
                    <Button id='btn'
                        onClick={joinClassSubmit}
                        type="submit">
                        Join Class
                    </Button>
                </div>
            </FormControl>

        </div>
    )
}
