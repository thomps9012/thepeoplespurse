import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems);
        };
        init();
    }, []);
    return (
        <>
            <nav className="nav-extended indigo darken-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/signUp">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="nav-content hide-on-med-and-down">
                    <div className="col s12">
                        <a href="/information" className="breadcrumb">Information Center</a>
                        <a href="/voting" className="breadcrumb">Voting</a>
                        <a href="/budgetResults" className="breadcrumb">Budget Results</a>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/signUp">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/information">Information Center</a></li>
                <li><a href="/voting">Voting</a></li>
                <li><a href="/budgetResults">Budget Results</a></li>
            </ul>
        </>
    )
}