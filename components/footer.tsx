import AppBar from "@mui/material/AppBar";
import Link from "next/link";

export default function Footer() {
    return (
        <AppBar position="fixed" id='footer' sx={{ top: 'auto', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div id='aboutLink' className="footerBtn" >
                <Link href='/about' passHref>
                    {"People's Purse Copyright © 2021"}
                </Link>
            </div>
            <div className="footerBtn" >
                <a id='voteLink' href="https://vote.gov/" target="_blank" rel="noopener noreferrer">
                    Registered to Vote?
                    {/* <i className="material-icons right">how_to_reg</i> */}
                </a>
            </div>
        </AppBar>
    )
}