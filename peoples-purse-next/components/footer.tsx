export default function Footer() {
    return (
        <footer className="page-footer" id='footer' style={{ padding: 20 }}>
            <div className="container" style={{ marginTop: 10, marginBottom: -10 }}>
                <div className="row">
                    <div className="col s6" style={{ fontSize: 'large', marginLeft: -30, marginRight: 30 }}>
                        <a id='voteLink' href='/about'>
                            People's Purse Copyright © 2021
                        </a>
                    </div>
                    <div className="col s6" style={{ textAlign: 'right', fontSize: 'large' }}>
                        <a id='voteLink' href="https://vote.gov/" target="_blank" rel="noopener noreferrer">
                            <i className="material-icons right">how_to_reg</i>
                            Are you registered to vote?
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}