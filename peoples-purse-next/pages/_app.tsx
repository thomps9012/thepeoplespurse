import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('auth_token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    }
  }
});

// development uri
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/',
})

const client = new ApolloClient({
  // development uri
  link: authLink.concat(httpLink),
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
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
