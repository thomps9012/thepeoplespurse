import { gql, useQuery } from '@apollo/client'

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
    if (error) return <p>Error :(</p>;
    const user = data.getUser;
    console.log(user)
    return (
        <>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.username}</p>
            {user.educator ?
                <h3>You're an educator</h3>
                : <h3>You're not an educator</h3>}
        </>
    )
}