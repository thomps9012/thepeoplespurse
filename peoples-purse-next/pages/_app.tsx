import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  // development uri
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache
});

client.query({
  query: gql`
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
}).then(result => console.log(result))

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
function AllVotes() {
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
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <AllVotes />
    </ApolloProvider>
  )
}

export default MyApp
