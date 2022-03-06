import { gql, useQuery } from '@apollo/client'
import Link from 'next/link';
import ClassInfo from '../components/educator/classInfo';
import LearnerClasses from '../components/learner/learnerClasses';
import LoggedOut from '../components/loggedOut';
import Button from '@mui/material/Button';

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
        <div className='profileContainer'>
            <div style={{ display: 'flex', margin: 25 }}>
                <h3 style={{ marginRight: 10 }}>{first_name}</h3>
                <h3>{last_name}</h3>
            </div>
            {educator ?
                <div className='profileContainer'>
                    <ClassInfo />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/createClass' passHref>
                                <a id='btn' className='waves-effect btn-large'>
                                    Create a New Class
                                </a>
                            </Link>
                        </div>
                    </div>
                </div> :
                <div className='learnerProfile'>
                    <h1 style={{ textAlign: 'center', margin: 40 }}>{actions.length} Actions Taken</h1>
                    <LearnerClasses />
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* join a class */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/JoinClass' passHref>
                                <Button id='btn'>
                                    <i className='material-icons left'>school</i>Join a New Class
                                </Button>
                            </Link>
                        </div>
                        {/* take an action */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/Take%20Action' passHref>
                                <Button id='btn'>
                                    <i className='material-icons left'>task_alt</i>Take a Civic Action
                                </Button>
                            </Link>
                        </div>
                        {/* vote */}
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <Link href='/Craft%20Budget' passHref>
                                <Button id='btn'>
                                    <i className='material-icons left'>addchart</i>Craft a Federal Budget
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>}
        </div>
    )
}