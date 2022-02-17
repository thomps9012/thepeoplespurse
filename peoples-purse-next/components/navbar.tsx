import { useEffect, useState } from "react";
import mixedLogo from '../public/mixedLogo.png';
import Image from 'next/image'

export default function Navbar() {
    const [userJWT, setUserJWT] = useState('')

    useEffect(() => {
        setUserJWT(sessionStorage.getItem('auth_token') || '');
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        };
        init();
    }, []);

    const logout = () => {
        sessionStorage.clear();
        window.location.replace('/')
    }
    return (
        <div style={{ marginBottom: 100 }}>
            <nav className="navbar-fixed transparent z-depth-0">
                <div className="nav-wrapper">
                    <a href="/"
                        style={{ display: 'flex', marginTop: -80 }}
                        className="brand-logo nav-item">
                        <Image
                            src={mixedLogo}
                            layout="fixed"
                            width={300}
                            height={300}
                        />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger nav-item"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {userJWT != '' ?
                            <>
                                <li><a href="/profile" className="nav-item"><h5>Profile</h5></a></li>
                                <li onClick={logout}><a className="nav-item"><h5>Logout</h5></a></li>
                                <li><a href="/voting" className="tab nav-item"><h5>Voting</h5></a></li>
                            </>
                            :
                            <>
                                <li><a href="/signUp" className="nav-item"><h5>Sign Up</h5></a></li>
                                <li><a href="/login" className="nav-item"><h5>Login</h5></a></li>
                            </>
                        }
                        <li><a href="/deptInformation" className="tab nav-item"><h5>Department Information</h5 ></a></li>
                        <li><a href="/electedOfficials" className="tab nav-item"><h5>Learn Who Represents You</h5 ></a></li>
                        <li><a href="/budgetResults" className="tab nav-item"><h5>Budget Results</h5 ></a></li>
                    </ul >
                </div >
            </nav >

            <ul className="sidenav" id="mobile-demo">
                <a href="/" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src={mixedLogo}
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                </a>
                {userJWT != '' ?
                    <>
                        <li><a href="/profile" className="nav-item"><i className='material-icons left'>account_box</i>Profile</a></li>
                        <li><a onClick={logout} className="nav-item"><i className='material-icons left'>logout</i>Logout</a></li>
                        <li><a href="/voting" className="nav-item"><i className='material-icons left'>how_to_vote</i>Voting</a></li>
                    </>
                    :
                    <>
                        <li><a href="/signUp" className="nav-item"><i className='material-icons left'>person_add</i>Sign Up</a></li>
                        <li><a href="/login" className="nav-item"><i className='material-icons left'>login</i>Login</a></li>
                    </>
                }
                <li><a href="/deptInformation" className="tab nav-item"><i className='material-icons left'>balance</i>Department Information</a></li>
                <li><a href="/electedOfficials" className="tab nav-item"><i className='material-icons left'>contact_phone</i>Learn Who Represents You</a></li>
                <li><a href="/budgetResults" className="nav-item"><i className='material-icons left'>analytics</i>Budget Results</a></li>
            </ul>
        </div >
    )
}