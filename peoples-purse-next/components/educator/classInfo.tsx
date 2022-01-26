import {
  useQuery,
  gql
} from '@apollo/client'
import Link from 'next/link';


const GET_CLASSES = gql`
query Query {
  getUser {
    classes {
      _id
      class_code
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
    <>
      <p>Look at all the classes</p>
      {classes.map((classDetail: any) => {
        return (
          <a href={`/classDetail/${classDetail._id}`}>
            <p key={classDetail._id} id={classDetail._id} >
              {classDetail.class_code}
            </p>
          </a>
        )
      })}
    </>
  )
}