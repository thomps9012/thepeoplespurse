import '../styles/globals.css'
import { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DefaultHeader from '../components/defaultHeader';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const authLink = setContext((_, { headers }) => {
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
  uri: 'https://lit-meadow-50865.herokuapp.com/',
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
      <DefaultHeader />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
