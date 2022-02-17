import Image from "next/image"

export default function AboutUs() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>About Us</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 25, padding: 25 }}>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className="col m6" >
                        <Image
                            src='/accelerate_headshot.jpg'
                            className="founderImg"
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="col m6">
                        <h3 style={{ textAlign: 'center' }}>Our Founder</h3>
                        <p style={{ fontSize: 'large', textAlign: 'center' }}>
                            Samuel Thompson is a former elementary educator and participant in the civic arena with experience lobbying on clean energy issues at the state legislature.
                            He's passionate about easy and equitable distribution of information regarding governmental spending and facilitating discussions with policymakers on these issues.
                            {/* "I've witnessed firsthand the empowering effect technology-based research coupled with meaningful action and hope to foster that growth in the next generation of civic leaders." */}
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div style={{ textAlign: 'center' }}>
                    <h3>Our Why</h3>
                    <ul style={{ margin: 20, padding: 10 }}>
                        <li>
                            <h5>
                                To educate, empower, and inspire the next generation of citizens to learn about the functions of their governing bodies
                            </h5>
                        </li>
                        <li>
                            <h5>
                                To foster connections between future citizens and civic leaders
                            </h5>
                        </li>
                        <li>
                            <h5>
                                To promote civic actions within learner’s communities
                            </h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}