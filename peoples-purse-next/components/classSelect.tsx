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
    if (loading) return <h1 style={{margin: 77, padding: 77, textAlign: 'center'}}>🛠 Give us just a minute here... 🛠</h1>;
    if (error) return <p style={{textAlign: 'center'}}>You need to login to view your class results</p>;

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