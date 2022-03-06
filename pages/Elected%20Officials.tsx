import { useEffect, useState } from "react"
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
    useEffect(() => {
        if (location === '') {
            document.getElementById('govtSearch1')?.setAttribute('disabled', 'true')
            document.getElementById('govtSearch2')?.setAttribute('disabled', 'true')
            document.getElementById('govtSearch3')?.setAttribute('disabled', 'true')
        } else {
            document.getElementById('govtSearch1')?.removeAttribute('disabled')
            document.getElementById('govtSearch2')?.removeAttribute('disabled')
            document.getElementById('govtSearch3')?.removeAttribute('disabled')
        }
    })
    const nationalLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=country&key=${API_KEY}`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
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
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
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
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
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
            const { name, party, urls, address, phones } = lvlOfficial;
            const lvlOfficialEl = ` 
                                    <div class="card" id='officialCard'>
                                        <div class="card-content white-text">
                                            <span class="card-title activator">${name}</span>
                                             <p>Party: ${party}</p>
                                        </div>
                                        <div class="card-action" id='officialLink' >
                                            <a href=${urls
                    ? urls[0]
                    : `https://www.google.com/search?q=${encodeURI(name)}`} 
                                            target='_blank'>Website</a>
                                        </div>
                                        <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
                                            ${address ?
                    `<p id='officialAdr'> Address: ${address[0].line1},
                                            ${address[0].city},
                                            ${address[0].state},
                                              ${address[0].zip}
                                              </p>`:
                    `Address Information Unavailable`}
                                              ${phones ?
                    `<p id='officialPhone' >Phone: ${phones[0]}</p>` :
                    `Phone Information Unavailable`}    
                                        </div>
                                    </div>
                                    `
            officialDiv != null ? officialDiv.innerHTML += lvlOfficialEl : '';
        })
    }

    return (
        <div className="officialContainer">
            <div className="row addressInput">
                <label className="addressLabel" style={{ color: '#e57373' }}>Address Input</label>
                <input type="text" onChange={getAddress} placeholder="Enter Address First" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <a id='govtSearch1' className="waves-effect btn-large" onClick={nationalLvl}>
                    National
                </a>
                <a id='govtSearch2' className="waves-effect btn-large" onClick={stateLvl}>
                    State
                </a>
                <a id='govtSearch3' className="waves-effect btn-large" onClick={localLvl}>
                    Local
                </a>
            </div>
            <br />
            <h3 style={{ textAlign: 'center' }}>Your Elected Officials Are</h3>
            <hr></hr>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {offices?.map((office: any) => {
                    return (
                        <>
                            {/* can compartmentalize this */}
                            <a href='#officialInfo' id='officialOffice'>
                                <h3 style={{ margin: 10, padding: 10 }} key={office.name} onClick={() => displayOfficials(office)}>{office.name}</h3>
                            </a>
                            <br />
                        </>
                    )
                })}
                <div id='officialInfo' style={{ rowGap: 20 }}></div>
            </div>
        </div>
    )

}
