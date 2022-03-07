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
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('auth_token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    }
  }
});

// development uri
const httpLink = createHttpLink({
  uri: 'https://peoplespurseserver.azurewebsites.net/',
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
