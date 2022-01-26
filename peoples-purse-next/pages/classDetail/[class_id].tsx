import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
// const CLASS_VOTES = gql`
// query ClassVotes($classId: ID!) {
//     classVotes(classID: $classId) {
//       _id
//       class_code
//       voter
//     }
//   }
// `;

const CLASS_ACTIONS = gql`
query ClassActions($classId: ID!) {
    classActions(classID: $classId) {
      _id
      username
      email
      actions {
        _id
        name
      }
    }
  }
`;


export default function ClassDetail() {
    const router = useRouter();
    let classID = router.query.class_id;
    const { loading, error, data } = useQuery(CLASS_ACTIONS, {
        variables: {
            classId: classID
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({JSON.stringify(error)}</p>;
    let classData = data.classActions;
    return (
        <>
            {classData.map((learner: any) => {
                console.log(learner)
                return (
                    <div className={styles.card} key={learner._id}>
                        <p>{learner.username}</p>
                        {learner.actions.map((action: any) => {
                            return (
                                <p key={action.name}>
                                    {action.name}
                                </p>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}
