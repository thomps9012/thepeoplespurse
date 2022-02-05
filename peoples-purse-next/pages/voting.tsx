import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import DeptCards from '../components/deptCards';
import { baseBudget } from '../../assets/deptVoting/baseBudget';
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({JSON.stringify(error)}</p>;

  if (!data) { return <LoggedOut /> }
  const userClasses = data.classes;
  const resetBudget = () => window.location.reload();
  return (
    <>
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
      <button onClick={resetBudget}>Reset Budget</button>

      <BudgetOutput budget={budget} />
      <DeptCards
        budget={budget}
        updateBudget={setBudget}
      />

      <button
        id="voteSubmit"
        onClick={async(e: any) => {
          e.preventDefault();
          const voteResponse = await castVote({
            variables: {
              input: {
                budget: budget,
                class_code: classCode
              }
            }
          })
          console.log(voteResponse)
        }
        }
      >
        Cast Vote
      </button>
    </>
  )
}