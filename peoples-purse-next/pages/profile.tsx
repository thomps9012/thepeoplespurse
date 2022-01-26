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
    return (
        <>
            <button>
                Logout
            </button>
        </>
    )
}