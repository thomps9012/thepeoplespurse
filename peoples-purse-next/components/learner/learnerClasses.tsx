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
            <h5 style={{textAlign: 'center'}}>Your Classes</h5>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {classes.map((classDetail: any) => {
                    return (
                        <div key={classDetail._id}>
                            <h6>
                                {classDetail.class_code}
                                <a style={{ margin: 10, marginTop: 5 }} className="btn-floating btn-small waves-effect waves-light red" onClick={removeClass} id={classDetail._id}><i className='material-icons'>clear</i>Remove Class</a>
                            </h6>
                        </div>
                    )
                })}
            </div>
            <div style={{textAlign: 'center'}}>
                <a className='waves-effect indigo darken-4 btn' href='/joinClass'><i className='material-icons left'>school</i>Join a New Class</a>
            </div>
        </>
    )
}