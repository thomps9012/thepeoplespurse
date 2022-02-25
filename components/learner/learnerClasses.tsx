import { useQuery, useMutation, gql } from "@apollo/client"
import Link from "next/link";
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
            <h5 style={{textAlign: 'center'}}>Your Classes</h5>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10, margin: 10}}>
                {classes.map((classDetail: any) => {
                    return (
                        <div key={classDetail._id}>
                            <h6>
                                {classDetail.class_code}
                                <a style={{ margin: 5, marginTop: 5 }} className="btn-floating btn-small waves-effect waves-light red" onClick={removeClass}><i id={classDetail._id} className='material-icons'>clear</i>Remove Class</a>
                            </h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}