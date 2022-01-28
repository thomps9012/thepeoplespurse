import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { depts } from '../../assets/deptVoting/depts'
import DeptCards from '../components/deptCards';
import { defenseDepts } from '../../assets/deptVoting/defenseDepts'
import { developDepts } from '../../assets/deptVoting/developDepts'
import { eduDepts } from '../../assets/deptVoting/eduDepts'
import { enviroDepts } from '../../assets/deptVoting/enviroDepts'
import { healthDepts } from '../../assets/deptVoting/healthDepts'
import { evenDistribution } from '../../assets/deptVoting/evenDist'
import LoggedOut from '../components/loggedOut';
import BudgetOutput from '../components/budgetOutput';

const GET_CLASSES = gql`
query ClassInfo {
    getUser {
      classes {
        class_code
        _id
      }
    }
  }`;

const CAST_VOTE = gql`
mutation Mutation($input: CastVote!) {
  castVote(input: $input)
}
`;
export default function VotingPage() {
  const [budget, setBudget] = useState(defenseDepts)

  const [classCode, setClass] = useState('')

  const { loading, data } = useQuery(GET_CLASSES);
  const [castVote, { error }] = useMutation(CAST_VOTE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({JSON.stringify(error)}</p>;
  console.log(data)
  if (!data) { return <LoggedOut /> }

  const userClasses = data.getUser.classes;
  let budgetArr = []
  for (let key in budget) {
    // console.log(key);
    const dept = key;
    // console.log(budget[key]);
    const percent = budget[key];
    budgetArr.push({ [dept]: percent })
  }
  const resetBudget = () => window.location.reload();
  const defenseFocused = () => setBudget(defenseDepts);
  const environFocused = () => setBudget(enviroDepts);
  const healthFocused = () => setBudget(healthDepts);
  const developFocused = () => setBudget(developDepts);
  const educationFocused = () => setBudget(eduDepts);
  const evenDist = () => setBudget(evenDistribution);

  // console.log(budget)
  // budget.forEach(dept => totalBudget += dept.percent)
  return (
    <>
      {/* <select onChange={(e: any) => setClass(e.target.value)}>
        {userClasses.map((classCode: any) => {
          return (
            <option key={classCode._id}>
              {classCode.class_code}
            </option>
          )
        })}
        <option>No Class</option>
      </select> */}
      <button onClick={defenseFocused}>Defense Focused</button>
      <button onClick={educationFocused}>Education Focused</button>
      <button onClick={healthFocused}>Health Focused</button>
      <button onClick={developFocused}>Development Focused</button>
      <button onClick={environFocused}>Environmentally Focused</button>
      <button onClick={evenDist}>Even Distribution</button>
      <button onClick={resetBudget}>Reset Budget</button>

      {/* compartmentalize */}
      <BudgetOutput budget={budget} />
          <DeptCards
            budget={budget}
            updateBudget={setBudget}
          />
      <button onClick={(e: any) => {
        e.preventDefault();
        castVote({
          variables: {
            input: {
              budget: budget,
              class_code: classCode
            }
          }
        })
      }
      }
      >
        Cast Vote
      </button>
    </>
  )
}