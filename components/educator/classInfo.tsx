import {
  useQuery,
  gql
} from '@apollo/client'
import Skeleton from '@mui/material/Skeleton';


const GET_CLASSES = gql`
query Query {
  getUser {
    classes {
      _id
      class_code
      votes
    }
  }
}
`;

export default function ClassInfo() {
  const { loading, error, data } = useQuery(GET_CLASSES);
  if (loading) return (
    <>
      <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here... 🛠 </h1>
      <Skeleton />
    </>);
  if (error) return <h3 style={{ textAlign: 'center', margin: 30, padding: 20 }}>You Haven`t Created Any Classes Yet</h3>;
  const classes = data.getUser.classes;
  return (
    <div style={{ margin: 20, padding: 20 }}>
      <h5>Your Classes:</h5>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {classes.map((classDetail: any) => {
          const { _id, class_code, votes } = classDetail;
          return (
            <div key={_id} className='card hoverable' id='btn' style={{ margin: 20, padding: 20, maxWidth: 200, minWidth: 200, textAlign: 'center' }}>
              <a href={`/classActions/${_id}`} className='classSelect'>
                <p key={_id} id={_id} style={{ fontSize: 'large', fontWeight: 'bold' }} >
                  View Actions for: {class_code}
                </p>
              </a>
              <a href={`/classVotes/${_id}`} className='classSelect'>
                <p key={_id} id={_id} style={{ fontSize: 'large', fontWeight: 'bold' }} >
                  View Votes for: {class_code}
                </p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}