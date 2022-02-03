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
        console.log(office)
        const officialDiv = document.getElementById(office.roles[0])
        officialDiv != null ? officialDiv.innerHTML ='' : '';
        officeOfficials.map((officeIndex: number) => {
            const lvlOfficial: any  = officials[officeIndex];
            console.log(lvlOfficial)
            document.getElementById(office.roles[0])?.append(lvlOfficial.name)

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
                        <h2 key={office.name} onClick={() => displayOfficials(office)}>{office.name}</h2>
                        <div key={office.roles[0]} id={office.roles[0]}></div>
                    </>
                )
            })}
        </>
    )

}
