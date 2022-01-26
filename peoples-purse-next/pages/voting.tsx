import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import { depts } from '../../assets/deptVoting/depts'
import DeptCards from '../components/deptCards';
// import { depts } from '../../assets/deptVoting/depts'
// import { depts } from '../../assets/deptVoting/depts'
// import { depts } from '../../assets/deptVoting/depts'
// import { depts } from '../../assets/deptVoting/depts'

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

  const evenDist = () => {

  }
  const updateBudget = () => {

  }
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
      {/* {budget.forEach((dept: any) => { */}
        {/* // { console.log(dept) } */}
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