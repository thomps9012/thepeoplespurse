import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const CLASS_VOTES = gql`
query ClassVotes($classId: ID!) {
    classVotes(classID: $classId) {
        _id
        budget {
            code
            name
            percent
        }
    }
}
`;

export default function ClassBudget() {
    const router = useRouter();
    let classID = router.query.class_id;
    const { loading, error, data } = useQuery(CLASS_VOTES, {
        variables: {
            classId: classID
        }
    });
    console.log(data.classVotes);
    const classVotes = data.classVotes;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {JSON.stringify(error)}</p>;
    return (
        classVotes.map(({ budget, _id }: any) => (
            <div key={_id}>
                <h5>
                    Budget {_id}
                </h5>
                {budget.map(({ name, percent }: any) => {
                    return (
                        <>
                            <p>{name}</p>
                            <p>{percent}</p>
                        </>
                    )
                })}
            </div>
        ))
    )
}