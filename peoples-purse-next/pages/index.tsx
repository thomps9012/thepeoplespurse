import { NextPage } from 'next'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='indexContainer'>
      <div className='row'>
        <div className='col s6'>
          <Image
            src='/bg-dc.png'
            width={256}
            height={256}
          />
        </div>
        <div className='col s6'>
          <h1 style={{ textAlign: 'center' }}>
            Welcome to People's Purse!
          </h1>
        </div>
      </div>
      <div className='row' style={{marginLeft: 50}}>
        <h3>Our Story</h3>
        <div className='col m6'>
          <h5>
            The People’s Purse is an innovative educational and social change web platform that informs middle and high school students within the Cleveland Metropolitan School District about the various governmental departments, empowers them to vote on a “proposed federal budget,” and encourages them to take civic action in their community.
          </h5>
        </div>
        <div className='col m6'>
          <Image
            src='/bg-people.png'
            width={300}
            height={256}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
