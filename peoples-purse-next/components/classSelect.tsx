import { useQuery, gql } from "@apollo/client";

const GET_USER_CLASSES = gql`
query Query {
    classes {
      _id
      class_code
    }
  }
`;

export default function ClassSelect() {
    const { loading, error, data } = useQuery(GET_USER_CLASSES)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {JSON.stringify(error)}</p>;

    const userClasses = data.classes
    console.log(userClasses)
    return (
        <select>
            {userClasses.map((classInfo: any) => {
                <option key={classInfo._id}>{classInfo.class_code}</option>
            })}
        </select>
    )
}