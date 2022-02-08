import { NextPage } from 'next'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
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
