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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
