import { NextPage } from 'next'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='indexContainer'>
      <div className='row' style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
        <div className='col m6' style={{ textAlign: 'center' }}>
          <h1 id='landingTitle'>
            {"Welcome to the People's Purse!"}
          </h1>
          <h5 id='sideNavInstructions' style={{ margin: 25, padding: 15, textAlign: 'center' }}>
            Use the Side NavBar above to Sign Up or Login and Experience the Full Functionality of the Application
          </h5>
        </div>
        <div className='col m6' id='landingImg'>
          <Image
            src='/volunteers.jpg'
            width={509}
            height={339}
            className='volunteerImg'
            alt='Volunteers'

            priority
          />
        </div>
      </div>
      <div className='row'>
        <hr></hr>
        <p style={{ fontSize: 'x-large', margin: 20, padding: 20, textAlign: 'center' }}>
          {/* The People’s Purse is an innovative educational and social change web platform that informs middle and high school students within the Cleveland Metropolitan School District about the various governmental departments, empowers them to vote on a “proposed federal budget,” and encourages them to take civic action in their communities. */}
          The People’s Purse is an innovative educational and social change web platform that informs citizens about different governmental departments, empowers them to vote on a “proposed federal budget”, and then take civic action in their communities.
        </p>
      </div>
    </div>
  )
}

export default Home
