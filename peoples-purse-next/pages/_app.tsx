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
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
