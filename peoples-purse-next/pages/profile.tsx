import { gql, useQuery } from '@apollo/client'
import ClassInfo from '../components/educator/classInfo';
import CreateClass from '../components/educator/createClass';
import JoinClass from '../components/learner/joinClass';
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
    console.log(user)
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
                    <h3>You're not an educator</h3>
                    <JoinClass />
                    <TakeAction />
                </>}
        </>
    )
}