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
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }

    const displayOfficials = (office: any) => {
        const officeOfficials = office.officialIndices;
        const officialDiv = document.getElementById('officialInfo')
        officialDiv != null ? officialDiv.innerHTML ='' : '';
        officeOfficials.map((officeIndex: number) => {
            const lvlOfficial: any  = officials[officeIndex]; 
            const lvlOfficialEl = ` <h5>${lvlOfficial.name}</h5>
                                    <p>${lvlOfficial.party}</p>
                                    <p>${lvlOfficial.address[0].line1}</p>
                                    <p>${lvlOfficial.address[0].city}</p>
                                    <p>${lvlOfficial.address[0].state}</p>
                                    <p>${lvlOfficial.address[0].zip}</p>
                                    <a href=${lvlOfficial.urls[0] 
                                        ? lvlOfficial.urls[0]
                                        : `https://www.google.com/search?q=${lvlOfficial.name}`} 
                                        target='_blank'>Official Website</a>
                                    `
            officialDiv != null ? officialDiv.innerHTML += lvlOfficialEl : '';

        })
    }

    return (
        <>
            <input type="text" onChange={getAddress} />
            <button onClick={nationalLvl}>
                National
            </button>
            <button onClick={stateLvl}>
                State
            </button>
            <button onClick={localLvl}>
                Local
            </button>
            {/* can compartmentalize this */}
            <h1>Offices</h1>
            {offices?.map((office: any) => {
                console.log(office)
                return (
                    <>
                        {/* can compartmentalize this */}
                        <p key={office.name} onClick={() => displayOfficials(office)}>{office.name}</p>
                    </>
                )
            })}
            <div id='officialInfo'></div>
        </>
    )

}
