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
        <>
            <nav className="nav-extended indigo darken-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {userJWT != '' ?
                            <>
                                <li><a href="/profile">Profile</a></li>
                                <li onClick={logout}><a>Logout</a></li>
                                <li><a href="/voting" className="tab">Voting</a></li>
                            </>
                            :
                            <>
                                <li><a href="/signUp">Sign Up</a></li>
                                <li><a href="/login">Login</a></li>
                            </>
                        }
                        <li><a href="/information" className="tab">Information Center</a></li>
                        <li><a href="/budgetResults" className="tab">Budget Results</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {userJWT != '' ?
                    <>
                        <li><a href="/profile">Profile</a></li>
                        <li><a onClick={logout}>Logout</a></li>
                        <li><a href="/voting">Voting</a></li>
                    </>
                    :
                    <>
                        <li><a href="/signUp">Sign Up</a></li>
                        <li><a href="/login">Login</a></li>
                    </>
                }
                <li><a href="/information">Information Center</a></li>
                <li><a href="/budgetResults">Budget Results</a></li>
            </ul>
        </>
    )
}