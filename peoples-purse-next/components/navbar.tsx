import { useEffect, useState } from "react";

export default function Navbar() {
    const [userJWT, setUserJWT] = useState('')
    
    useEffect(() => {
        setUserJWT(localStorage.getItem('auth_token') || '');
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        };
        init();
    }, []);
    
    const logout = () => {
        localStorage.clear();
        window.location.replace('/')
    }
    return (
        <div>
            <nav className="navbar-fixed transparent z-depth-0">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo indigo-text text-darken-4">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger indigo-text text-darken-4"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down indigo-text">
                        {userJWT != '' ?
                            <>
                                <li><a href="/profile" className="indigo-text text-darken-4">Profile</a></li>
                                <li onClick={logout}><a className="indigo-text text-darken-4">Logout</a></li>
                                <li><a href="/voting" className="tab indigo-text text-darken-4">Voting</a></li>
                            </>
                            :
                            <>
                                <li><a href="/signUp" className="indigo-text text-darken-4">Sign Up</a></li>
                                <li><a href="/login" className="indigo-text text-darken-4">Login</a></li>
                            </>
                        }
                        <li><a href="/deptInformation" className="tab indigo-text text-darken-4">Department Information</a></li>
                        <li><a href="/electedOfficials" className="tab indigo-text text-darken-4">Learn Your Elected Officials</a></li>
                        <li><a href="/budgetResults" className="tab indigo-text text-darken-4">Budget Results</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {userJWT != '' ?
                    <>
                        <li><a href="/profile"  className="indigo-text text-darken-4">Profile</a></li>
                        <li><a onClick={logout} className="indigo-text text-darken-4">Logout</a></li>
                        <li><a href="/voting" className="indigo-text text-darken-4">Voting</a></li>
                    </>
                    :
                    <>
                        <li><a href="/signUp" className="indigo-text text-darken-4">Sign Up</a></li>
                        <li><a href="/login" className="indigo-text text-darken-4">Login</a></li>
                    </>
                }
                <li><a href="/deptInformation" className="tab indigo-text text-darken-4">Department Information</a></li>
                        <li><a href="/electedOfficials" className="tab indigo-text text-darken-4">Learn Your Elected Officials</a></li>
                <li><a href="/budgetResults" className="indigo-text text-darken-4">Budget Results</a></li>
            </ul>
        </div>
    )
}