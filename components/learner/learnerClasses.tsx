import { useQuery, useMutation, gql } from "@apollo/client"
import Fab from '@mui/material/Fab';
import Delete from '@mui/icons-material/Delete';
import LoggedOut from "../loggedOut";

const GET_CLASSES = gql`
query Query {
    classes {
      _id
      class_code
    }
  }
`;

const REMOVE_CLASS = gql`
mutation Mutation($classId: ID!) {
    removeClass(classID: $classId) {
      _id
    }
  }
`;

export default function LearnerClasses() {
    const { loading, data, error } = useQuery(GET_CLASSES);
    const [deleteClass] = useMutation(REMOVE_CLASS);
    if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here... 🛠 </h1>;
    if (error) {
        console.log(error)
        return <LoggedOut />
    }
    const removeClass = async (e: any) => {
        const classID = e.target.id;
        console.log(classID)
        await deleteClass({
            variables: {
                classId: classID
            }
        })
        window.location.reload();
    }
    const classes = data.classes;
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Your Classes</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10, margin: 10 }}>
                {classes.map((classDetail: any) => {
                    return (
                        <div key={classDetail._id} style={{display: 'flex', margin: 5, padding: 5}}>
                            <h2 style={{ padding: 5 }}>
                                {classDetail.class_code}
                            </h2>
                            <Fab size='small' color='error' onClick={removeClass}>
                                <Delete />
                            </Fab>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}