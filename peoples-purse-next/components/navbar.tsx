import { useEffect, useState } from "react";
import mixedLogo from '../public/mixedLogo.png';
import Image from 'next/image'
import Link from "next/link";
import { Sidenav } from "materialize-css";

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
    const hideNav = () => {
        const elems = document.querySelector('.sidenav') as HTMLElement;
        var instance = M.Sidenav.getInstance(elems)
        instance.close()
    }
    return (
        <div style={{ marginBottom: 100 }}>
            <nav className="navbar-fixed transparent z-depth-0">
                <div className="nav-wrapper">
                    <div style={{ display: 'flex', marginTop: -80 }} className="brand-logo nav-item">
                        <Link href="/" passHref>
                            <Image
                                src={mixedLogo}
                                layout="fixed"
                                width={300}
                                height={300}
                                alt={"People's Purse Logo"}
                            />
                        </Link>
                    </div>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger nav-item"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {userJWT != '' ?
                            <>
                                <Link href="/profile" passHref><li className="nav-item"><h5>Profile</h5></li></Link>
                                <li className="nav-item" onClick={logout}><h5>Logout</h5></li>
                                <Link href="/voting" passHref><li className="tab nav-item"><h5>Voting</h5></li></Link>
                            </>
                            :
                            <>
                                <Link href="/signUp" passHref><li className="nav-item"><h5>Sign Up</h5></li></Link>
                                <Link href="/login" passHref><li className="nav-item"><h5>Login</h5></li></Link>
                            </>
                        }
                        <Link href="/deptInformation" passHref><li className="tab nav-item"><h5>Department Information</h5 ></li></Link>
                        <Link href="/electedOfficials" passHref><li className="tab nav-item"><h5>Learn Who Represents You</h5 ></li></Link>
                        <Link href="/budgetResults" passHref><li className="tab nav-item"><h5>Budget Results</h5 ></li></Link>
                    </ul >
                </div >
            </nav >

            <ul className="sidenav" id="mobile-demo" onMouseUp={hideNav}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/" passHref>
                        <Image
                            src={mixedLogo}
                            layout="fixed"
                            width={200}
                            height={200}
                            alt='Sidebar Logo'
                        />
                    </Link>
                </div>
                {userJWT != '' ?
                    <>
                        <Link href="/profile" passHref><li className="side-nav-item"><i className='material-icons left' id='sideIcon'>account_box</i>Profile</li></Link>
                        <li className="side-nav-item" onClick={logout}><i className='material-icons left' id='sideIcon'>logout</i>Logout</li>
                        <Link href="/voting" passHref><li className="side-nav-item"><i className='material-icons left' id='sideIcon'>how_to_vote</i>Voting</li></Link>
                    </>
                    :
                    <>
                        <Link href="/signUp" passHref><li className="side-nav-item"><i className='material-icons left' id='sideIcon'>person_add</i>Sign Up</li></Link>
                        <Link href="/login" passHref><li className="side-nav-item"><i className='material-icons left' id='sideIcon'>login</i>Login</li></Link>
                    </>
                }
                <Link href="/deptInformation" passHref><li className="tab side-nav-item"><i className='material-icons left' id='sideIcon'>balance</i>Department Information</li></Link>
                <Link href="/electedOfficials" passHref><li className="tab side-nav-item"><i className='material-icons left' id='sideIcon'>contact_phone</i>Learn Who Represents You</li></Link>
                <Link href="/budgetResults" passHref><li className="side-nav-item"><i className='material-icons left' id='sideIcon'>analytics</i>Budget Results</li></Link>
            </ul>
        </div >
    )
}