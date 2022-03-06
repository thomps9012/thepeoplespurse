import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import DeptCards from '../components/deptCards';
import { baseBudget } from '../assets/deptVoting/baseBudget';
import LoggedOut from '../components/loggedOut';
import BudgetOutput from '../components/budgetOutput';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Skeleton from '@mui/material/Skeleton';


const GET_CLASSES = gql`
query Query {
  classes {
    _id
    class_code
  }
}`;

const CAST_VOTE = gql`
mutation Mutation($input: CastVote!) {
  castVote(input: $input)
}
`;
export default function VotingPage() {
  const [budget, setBudget] = useState(baseBudget)
  const [classCode, setClass] = useState('')

  const { loading, data } = useQuery(GET_CLASSES);
  const [castVote, { error }] = useMutation(CAST_VOTE);

  if (loading) return <Skeleton />;
  if (error) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center' }}>Error :({JSON.stringify(error)}</h1>;

  if (!data) { return <LoggedOut /> }
  const userClasses = data.classes;
  const resetBudget = () => window.location.reload();
  const voteSubmit = async (e: any) => {
    e.preventDefault();
    const cleanedBudget = budget.map(dept => {
      const { id, name, percent } = dept;
      const cleanDept = {
        id: id,
        name: name,
        percent: percent
      }
      return cleanDept
    })
    const voteResponse = await castVote({
      variables: {
        input: {
          budget: cleanedBudget,
          class_code: classCode
        }
      }
    })
    if (voteResponse.data.castVote != '' || null) {
      window.location.assign('/Budget%20Results')
    } else {
      alert('There seems to have been an error processing your vote')
    }
  }

  return (
    <div className='voteContainer'>
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'space-evenly', margin: 10 }}>
        <BudgetOutput budget={budget} />
        <Button id='btn' onClick={resetBudget}>
          <i className="material-icons left">restart_alt</i>Reset Budget
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 20 }}>
        <DeptCards
          style={{ display: 'flex-wrap' }}
          budget={budget}
          updateBudget={setBudget}
        />
      </div>
      <div style={{ margin: 20 }}>
        <FormControl fullWidth>
          <InputLabel>Class Select</InputLabel>
          <Select onChange={(e: any) => setClass(e.target.value)} label='Class Select'>
            {userClasses ?
              userClasses.map((classCode: any) => {
                const {_id, class_code} = classCode;
                return (
                  <MenuItem key={_id} value={_id}>
                    {class_code}
                  </MenuItem>
                )
              }) :
              <MenuItem value=''>No Joined Classes</MenuItem>
            }
          </Select>
        </FormControl>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 30 }}>
        <Button id='voteSubmit' onClick={voteSubmit}>
          <i className='material-icons right'>how_to_vote</i>
          Cast Vote
        </Button>
      </div>
    </div>
  )
}