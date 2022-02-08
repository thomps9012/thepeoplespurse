import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const CLASS_ACTIONS = gql`
query ClassActions($classId: ID!) {
    classActions(classID: $classId) {
      _id
      username
      first_name
      last_name
      email
      actions {
        action_date
        name
        detail
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
    const classData = data.classActions;
    const showActions = (e: any) => {
        const learnerId = e.target.id + 'List';
        const learnerActionList = document.getElementById(learnerId);
        const displayed = learnerActionList?.getAttribute('style');
        displayed == 'display: none' ?
            learnerActionList?.setAttribute('style', 'display: block')
            : learnerActionList?.setAttribute('style', 'display: none')
    }
    return (
        <>
            {classData.map((learner: any) => {
                console.log(learner)
                return (
                    <div className={styles.card} key={learner._id}>
                        <h1 onClick={showActions} id={learner._id}>{learner.first_name}</h1>
                        <p>{learner.actions.length} Actions</p>
                        <ol id={learner._id + 'List'} style={{ display: 'none' }}>
                            {learner.actions.map((action: any) => {
                                return (
                                    <li key={action.action_date}>
                                        <p>{action.name}</p>
                                        <p>{action.action_date}</p>
                                        <p>{action.detail}</p>
                                        <hr />
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </>
    )
}
