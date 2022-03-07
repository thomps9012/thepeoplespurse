import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Skeleton from '@mui/material/Skeleton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreSharp from '@mui/icons-material/ExpandMoreSharp';

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

    if (loading) return <Skeleton />
    if (error) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center' }}>Error :({JSON.stringify(error)}</h1>;
    const classData = data.classActions;
    console.log(classData)
    return (
        <div className='classDetailContainer'>
            <h2 style={{ marginTop: -125, marginBottom: 75, color: '#e57373' }}>Learner and Action History</h2>
            <div style={{ width: '75%' }}>
                {classData.length === 0 ?
                    <h3 style={{ textAlign: 'center' }}>No learners have joined this class yet</h3>
                    :
                    <Accordion>
                        {classData.map((learner: any) => {
                            const { _id, first_name, actions, last_name } = learner;
                            return (
                                <li className='collapsible-header' id='btn' key={_id}>
                                    <AccordionSummary id={_id} expandIcon={<ExpandMoreSharp />}>
                                        <Typography>
                                            {first_name} {last_name}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ol id={learner._id + 'List'}>
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
                                    </AccordionDetails>
                                </li>
                            )
                        })}
                    </Accordion>
                }
            </div>
        </div>
    )
}
