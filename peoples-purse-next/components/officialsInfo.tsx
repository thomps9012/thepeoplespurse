import { useState } from "react"
const API_KEY = "AIzaSyDsCAsDVamr-9rGO6DwtlXHcZL-8Tx5oeA"

export default function ElectedOfficials() {
    const [location, setLocation] = useState('');
    const [offices, setOffices] = useState([]);
    const [officials, setOfficials] = useState([]);
    const getAddress = (e: any) => {
        e.preventDefault();
        const address = (e.target as HTMLInputElement).value;
        setLocation(address)
    }
    const nationalLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=country&key=${API_KEY}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const officialDiv = document.getElementById('officialInfo')
                officialDiv != null ? officialDiv.innerHTML = '' : '';
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    const stateLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=administrativeArea1&key=${API_KEY}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const officialDiv = document.getElementById('officialInfo')
                officialDiv != null ? officialDiv.innerHTML = '' : '';
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    const localLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=administrativeArea2&levels=locality&key=${API_KEY}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const officialDiv = document.getElementById('officialInfo')
                officialDiv != null ? officialDiv.innerHTML = '' : '';
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    // possible modualrization opportunity
    const displayOfficials = (office: any) => {
        const officeOfficials = office.officialIndices;
        const officialDiv = document.getElementById('officialInfo')
        officialDiv != null ? officialDiv.innerHTML = '' : '';
        officeOfficials.map((officeIndex: number) => {
            const lvlOfficial: any = officials[officeIndex];
            console.log(lvlOfficial)
            const lvlOfficialEl = ` 
                                    <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                <span class="card-title activator">${lvlOfficial.name}</span>
                                <p>Party: ${lvlOfficial.party}</p>
                                
                                </div>
                                <div class="card-action">
                                <a href=${lvlOfficial.urls[0]
                                    ? lvlOfficial.urls[0]
                                    : `https://www.google.com/search?q=${lvlOfficial.name}`} 
                                target='_blank'>Website</a>
                                </div>
                                    <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">${lvlOfficial.name}<i class="material-icons right">close</i></span>
                                            <p> Address: ${lvlOfficial.address[0].line1},
                                            ${lvlOfficial.address[0].city},
                                            ${lvlOfficial.address[0].state},
                                              ${lvlOfficial.address[0].zip}
                                              </p>
                                              <p>Phone: ${lvlOfficial.phones[0]}</p>
                                              
                                        </div>
                                    </div>
                                    `
            officialDiv != null ? officialDiv.innerHTML += lvlOfficialEl : '';
        })
    }

    return (
        <>
            <h5>Learn Who Your Elected Officials Are</h5>
            <div className="row">
                <label>Address Input</label>
                <input type="text" onChange={getAddress} placeholder="Enter Your Address Here" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <a className="waves-effect waves-light btn" onClick={nationalLvl}>
                    National
                </a>
                <a className="waves-effect waves-light btn" onClick={stateLvl}>
                    State
                </a>
                <a className="waves-effect waves-light btn" onClick={localLvl}>
                    Local
                </a>
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {offices?.map((office: any) => {
                    console.log(office)
                    return (
                        <>
                            {/* can compartmentalize this */}
                            <h6 style={{ margin: 10, padding: 10 }} key={office.name} onClick={() => displayOfficials(office)}>{office.name}</h6>
                            <br />
                        </>
                    )
                })}
            </div>
            <div id='officialInfo'></div>
        </>
    )

}
