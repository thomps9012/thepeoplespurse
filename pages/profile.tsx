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
                <>
                    <LearnerClasses />
                    <h5 style={{ textAlign: 'center', margin: 40 }}>{actions.length} Actions Taken</h5>
                    <TakeAction />
                    {/* double check this */}
                    <div>
                        <a id='volunteerLink' href="https://www.volunteermatch.org/" target="_blank" rel="noopener noreferrer">
                            <h5>
                                Looking for Volunteer Opportunities and Ideas?
                            </h5>
                            <i id='volunteerIcon' className='material-icons'>volunteer_activism</i>
                        </a>
                    </div>
                </>}
        </div>
    )
}