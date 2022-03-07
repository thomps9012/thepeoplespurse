import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='indexContainer'>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <div style={{ textAlign: 'center', display: 'table', padding: 20 }}>
          <h1 id='landingTitle'>
            {"Welcome to the People's Purse!"}
          </h1>
        </div>
        <Image
          src='/volunteers.jpg'
          width={509}
          height={339}
          className='volunteerImg'
          alt='Volunteers'
          priority
        />
        <h2 id='sideNavInstructions' style={{ margin: 25, padding: 15, textAlign: 'center' }}>
          Use the Menus Above to Sign Up or Login and Navigate the Website
        </h2>
      </div>
      <div style={{ margin: 25, padding: 10, marginBottom: 50 }}>
        <hr></hr>
        <p style={{ fontSize: 'x-large', textAlign: 'center' }}>
          {/* The People’s Purse is an innovative educational and social change web platform that informs middle and high school students within the Cleveland Metropolitan School District about the various governmental departments, empowers them to vote on a “proposed federal budget,” and encourages them to take civic action in their communities. */}
          The People’s Purse is an innovative educational and social change web platform that informs citizens about different governmental departments, empowers them to vote on a “proposed federal budget”, and then take civic action in their communities.
        </p>
      </div>
    </div>
  )
}

export default Home
