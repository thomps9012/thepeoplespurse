import {
    useQuery,
    gql
} from '@apollo/client';

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    data.allVotes.map(({ budget, _id }: any) => (
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
    ))
  )
}