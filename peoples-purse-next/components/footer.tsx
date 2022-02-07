export default function Footer() {
    return (
        <footer className="page-footer indigo darken-4">
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        People's Purse Copyright © 2021
                    </div>
                    <div className="col s6" style={{textAlign: 'right'}}>
                        <a className="white-text" href="https://vote.gov/" target="_blank" rel="noopener noreferrer">
                            Are you registered to vote?
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}