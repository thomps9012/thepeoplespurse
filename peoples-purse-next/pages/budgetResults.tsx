import {
    useQuery,
    gql
} from '@apollo/client';
// import VoteCalculator from './api/voteCalc';
// import ClassSelect from '../components/classSelect';

const ALL_VOTES = gql`
query Query {
  allVotes {
    _id
    budget {
      code
      name
      percent
    }
  }
}
`

export default function BudgetResults() {
    const { loading, error, data } = useQuery(ALL_VOTES);
    console.log(data)
    if (data) { const allVotes = data.allVotes 
    console.log(allVotes)
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {JSON.stringify(error)}</p>;
    return (
        <>
            <div id='chart'>
                <p>test</p>
            </div>
        </>
    )
}