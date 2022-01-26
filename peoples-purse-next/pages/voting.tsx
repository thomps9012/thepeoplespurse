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
  const [budget, setBudget] = useState([...depts])
  const { loading, error, data } = useQuery(GET_CLASSES);
  const [castVote, { }] = useMutation(CAST_VOTE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({JSON.stringify(error)}</p>;
  const userClasses = data.getUser.classes;
  const resetBudget = () => {
    window.location.reload();
  }

  
  const updateBudget = () => {

  }

  const defenseFocused = () => setBudget(defenseDepts);
  const environFocused = () => setBudget(enviroDepts);
  const healthFocused = () => setBudget(healthDepts);
  const developFocused = () => setBudget(developDepts);
  const educationFocused = () => setBudget(eduDepts);
  const evenDist = () => setBudget(evenDistribution);


  console.log(budget)
  return (
    <>
      <select>
        {userClasses.map((classCode: any) => {
          return (
            <option key={classCode._id}>
              {classCode.class_code}
            </option>
          )
        })}
        <option>No Class</option>
      </select>
      <button onClick={defenseFocused}>Defense Focused</button>
      <button onClick={educationFocused}>Education Focused</button>
      <button onClick={healthFocused}>Health Focused</button>
      <button onClick={developFocused}>Development Focused</button>
      <button onClick={environFocused}>Environmentally Focused</button>
      <button onClick={evenDist}>Even Distribution</button>
      <DeptCards
        budget={budget}
        updateBudget={updateBudget}
      />
      {/* })} */}
      <button onClick={() => castVote}>
        Cast Vote
      </button>
    </>
  )
}