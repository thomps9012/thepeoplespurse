import {
    useQuery,
    gql
} from '@apollo/client';
import ClassSelect from '../components/classSelect';

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
    console.log(data.allVotes)
    const allVotes = data.allVotes;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {JSON.stringify(error)}</p>;
    return (
        <>
            <p>Select a Class to See Their Budget</p>
            <ClassSelect />
            {allVotes.map(({ budget, _id }: any) => (
                <div key={_id}>
                    <h5>
                        Budget {_id}
                    </h5>
                    {budget.map(({ name, percent }: any) => {
                        return (
                            <>
                                <p>{name}</p>
                                <p>{percent}</p>
                            </>
                        )
                    })}
                </div >
            ))}
        </>
    )
}