import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OfficialCards from "../components/officialCards";
import FormControl from "@mui/material/FormControl";

const GOOGLE_CIVIC_API = 'AIzaSyDsCAsDVamr-9rGO6DwtlXHcZL-8Tx5oeA';

export default function ElectedOfficials() {
    const [location, setLocation] = useState('');
    const [offices, setOffices] = useState([]);
    const [officials, setOfficials] = useState([]);
    const [office, setOffice] = useState('');
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
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=country&key=${GOOGLE_CIVIC_API}`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
            })
            .then(function (data) {
                setOffice('')
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    const stateLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=administrativeArea1&key=${GOOGLE_CIVIC_API}`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
            })
            .then(function (data) {
                setOffice('')
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    const localLvl = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=administrativeArea2&levels=locality&key=${GOOGLE_CIVIC_API}`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Please enter a valid address.')
                }
            })
            .then(function (data) {
                setOffice('')
                const offices = data.offices;
                setOffices(offices)
                const officials = data.officials;
                setOfficials(officials)
            })
    }
    const displayOfficials = (office: any) => {
        setOffice(office)
    }

    return (
        <div className="officialContainer">
            <div className="addressInput">
                <FormControl fullWidth>
                <TextField placeholder='Address Input' variant='outlined' onChange={getAddress} label='Enter Address First' helperText='Street Address, City, State, Zip' />
                </FormControl>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Button id='govtSearch1' className="btn-large" onClick={nationalLvl}>
                    National Offices
                </Button>
                <Button id='govtSearch2' className="btn-large" onClick={stateLvl}>
                    State Offices
                </Button>
                <Button id='govtSearch3' className="btn-large" onClick={localLvl}>
                    Local Offices
                </Button>
            </div>
            <br />
            <h1 style={{ textAlign: 'center' }}>Your Elected Officials Are</h1>
            <hr></hr>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {offices?.map((office: any) => {
                    return (
                        <>
                            <a href='#officialInfo' id='officialOffice'>
                                <h3 style={{ margin: 10, padding: 10 }} key={office.name} onClick={() => displayOfficials(office)}>{office.name}</h3>
                            </a>
                            <br />
                        </>
                    )
                })}
            </div>
            <div id='officialInfo' style={{ rowGap: 10, margin: 30 }}>
                <OfficialCards office={office} officials={officials} />
            </div>

        </div>
    )

}
