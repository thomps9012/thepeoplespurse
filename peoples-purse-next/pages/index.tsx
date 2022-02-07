import { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>the People's Purse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <div className='row'>
        <div className='col s6'>
          <Image
            src='/bg-dc.png'
            width={1500}
            height={750}
          />
        </div>
        <div className='col s6'>
          <h1 style={{ textAlign: 'center' }}>
            Welcome to People's Purse!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
