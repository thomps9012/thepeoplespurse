import {
  useQuery,
  gql
} from '@apollo/client'


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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({JSON.stringify(error)}</p>;
  console.log(data)
  const classes = data.getUser.classes;
  console.log(classes)
  return (
    <div style={{ margin: 20, padding: 20 }}>
      <h5>Your Classes:</h5>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {classes.map((classDetail: any) => {
          return (
            <div className='card hoverable' style={{margin: 20, padding: 20, maxWidth: 200, minWidth: 200, textAlign: 'center'}}>
              <a href={`/classDetail/${classDetail._id}`} className='classSelectA'>
                <p key={classDetail._id} id={classDetail._id} style={{ fontSize: 'large', fontWeight: 'bold' }} >
                  {classDetail.class_code}
                </p>
                <p style={{ fontSize: 'medium', fontWeight: 'bold' }}>
                  Total Votes: {classDetail.votes.length}
                </p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}