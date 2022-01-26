import { useQuery, gql } from '@apollo/client';

const GET_CLASSES = gql`
query ClassInfo {
    getUser {
      classes {
        class_code
        _id
      }
    }
  }`;
export default function VotingPage() {
    const { loading, error, data } = useQuery(GET_CLASSES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({JSON.stringify(error)}</p>;
    const userClasses = data.getUser.classes;
    console.log(userClasses)
    return (
        <>
            <select>
                {userClasses.map((classCode: any) => {
                return(
                <option key={classCode._id}>
                    {classCode.class_code}
                </option>
                )
            })}
            </select>
        </>
    )
}