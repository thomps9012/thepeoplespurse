import { useQuery, useMutation, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import DeptCards from '../components/deptCards';
import { baseBudget } from '../assets/deptVoting/baseBudget';
import LoggedOut from '../components/loggedOut';
import BudgetOutput from '../components/budgetOutput';


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
  
  if (loading) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center' }}>🛠 Give us just a minute here... 🛠 </h1>;
  if (error) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center' }}>Error :({JSON.stringify(error)}</h1>;

  if (!data) { return <LoggedOut /> }
  const userClasses = data.classes;
  const resetBudget = () => window.location.reload();


  return (
    <div className='container'>

      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'space-evenly', marginTop: 10 }}>
        <BudgetOutput budget={budget} />
        <a id='resetBtn' className="waves-effect waves-light red lighten-2 btn-large" onClick={resetBudget}><i className="material-icons left">restart_alt</i>Reset Budget</a>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 20 }}>
        <DeptCards
          style={{ display: 'flex-wrap' }}
          budget={budget}
          updateBudget={setBudget}
        />
      </div>
      <label>Class Select</label>
      <select onChange={(e: any) => setClass(e.target.value)}>
        {userClasses ?
          userClasses.map((classCode: any) => {
            return (
              <option key={classCode._id}>
                {classCode.class_code}
              </option>
            )
          }) :
          <option value=''>No Joined Classes</option>
        }
      </select>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 30 }}>

        <a
          className='waves-effect waves-light btn-large'
          id="voteSubmit"
          onClick={async (e: any) => {
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
              window.location.assign('/budgetResults')
            } else {
              alert('There seems to have been an error processing your vote')
            }
          }
          }
        >
          <i className='material-icons right'>how_to_vote</i>
          Cast Vote
        </a>
      </div>
    </div>
  )
}