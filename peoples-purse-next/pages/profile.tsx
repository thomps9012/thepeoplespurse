import { gql, useQuery } from '@apollo/client'
import ClassInfo from '../components/educator/classInfo';
import CreateClass from '../components/educator/createClass';
import LearnerClasses from '../components/learner/learnerClasses';
import TakeAction from '../components/learner/takeAction';
import LoggedOut from '../components/loggedOut';

const GET_USER = gql`
query Query {
    getUser {
      _id
      first_name
      last_name
      educator
      username
      actions {
          name
      }
    }
  }
`;

export default function ProfilePage() {
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error)
        return <LoggedOut />
    }
    const user = data.getUser;
    return (
        <>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.username}</p>
            {user.educator ?
                <>
                    <h3>You're an educator</h3>
                    <ClassInfo />
                    <CreateClass />
                </> :
                <>
                    <LearnerClasses />
                    <h3>{user.actions.length} Actions Taken</h3>
                    <TakeAction />
                </>}
        </>
    )
}