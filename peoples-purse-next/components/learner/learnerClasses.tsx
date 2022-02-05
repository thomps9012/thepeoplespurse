import { useQuery, useMutation, gql } from "@apollo/client"
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

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error)
        return <LoggedOut />
    }
    console.log(data)
    const removeClass = async (e: any) => {
        const { id } = e.target;
        await deleteClass({
            variables: {
                classId: id
            }
        })
        window.location.reload();
    }
    const classes = data.classes;
    return (
        <>
            <p>Your Classes</p>
            <ul>
                {classes.map((classDetail: any) => {
                    return (
                        <div key={classDetail._id}>
                            <li>{classDetail.class_code}</li>
                            <button onClick={removeClass} id={classDetail._id}>Remove Class</button>
                        </div>
                    )
                })}
            </ul>
            <a href='/joinClass'>Join a New Class</a>
        </>
    )
}