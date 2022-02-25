import { gql, useQuery } from '@apollo/client'
import Link from 'next/link';
import ClassInfo from '../components/educator/classInfo';
import CreateClass from '../components/educator/createClass';
import LearnerClasses from '../components/learner/learnerClasses';
import TakeAction from './takeAction';
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
    if (loading) return <h1 id='loading' style={{ margin: 77, padding: 77, textAlign: 'center' }}>🛠 Give us just a minute here... 🛠</h1>;
    if (error) {
        return <LoggedOut />
    }
    const user = data.getUser;
    const { first_name, last_name, educator, actions } = user;
    return (
        <div className='container'>
            <div style={{ display: 'flex', marginTop: 15 }}>
                <h5 style={{ marginRight: 10 }}>{first_name}</h5>
                <h5>{last_name}</h5>
            </div>
            {educator ?
                <>
                    <ClassInfo />
                    <CreateClass />
                </> :
                <div className='learnerProfile'>
                    <h5 style={{ textAlign: 'center', margin: 40 }}>{actions.length} Actions Taken</h5>
                    <LearnerClasses />
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {/* join a class */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/joinClass' passHref>
                                <div id='btn' className='waves-effect btn'><i className='material-icons left'>school</i>Join a New Class</div>
                            </Link>
                        </div>
                        {/* take an action */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/takeAction' passHref>
                                <div id='btn' className='waves-effect btn'><i className='material-icons left'>task_alt</i>Take a Civic Action</div>
                            </Link>
                        </div>
                        {/* vote */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/voting' passHref>
                                <div id='btn' className='waves-effect btn'><i className='material-icons left'>addchart</i>Craft a Federal Budget</div>
                            </Link>
                        </div>
                    </div>
                </div>}
        </div>
    )
}