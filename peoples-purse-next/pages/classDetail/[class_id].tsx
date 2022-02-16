import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
    console.log(classID)
    const { loading, error, data } = useQuery(CLASS_ACTIONS, {
        variables: {
            classId: classID
        }
    });
    useEffect(() => {
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('.collapsible');
            const instances = M.Collapsible.init(elems);
        };
        init();
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({JSON.stringify(error)}</p>;
    const classData = data.classActions;
    console.log(classData)
    return (
        <div className='classDetailContainer'>
            <h2 style={{marginTop: -125, marginBottom: 75, color: '#e57373'}}>Learner and Action History</h2>
            <div style={{ width: '75%'}}>
                {classData.length === 0 ?
                    <h3 style={{textAlign: 'center'}}>No learners have joined this class yet</h3>
                    :
                    <ul className='collapsible'>
                        {classData.map((learner: any) => {
                            const { _id, first_name, actions, last_name } = learner;
                            return (
                                <li className='collapsible-header' id='btn' key={_id}>
                                    <h5 id={_id}>{first_name} {last_name}</h5>
                                    <ol className='collapsible-body' id={learner._id + 'List'} style={{ display: 'none' }}>
                                        {actions.map((action: any) => {
                                            const { action_date, name, detail } = action;
                                            let year = action_date.slice(0, 4);
                                            let month = action_date.slice(5, 7)
                                            let day = action_date.slice(8, 10)
                                            let formattedDate = `${month}/${day}/${year}`;
                                            return (
                                                <li key={action_date}>
                                                    <h5>{name}</h5>
                                                    <h6>{formattedDate}</h6>
                                                    <p>{detail}</p>
                                                </li>
                                            )
                                        })}
                                    </ol>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}
