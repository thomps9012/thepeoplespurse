import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
query Query {
    getUser {
      _id
      educator
    }
  }
`;

export default function ProfilePage() {
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
        {console.log(data)}
        </>
    )
}