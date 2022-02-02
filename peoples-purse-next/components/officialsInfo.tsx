import { generateKeyPair } from "crypto"
import { GetServerSideProps } from "next"
import { useState } from "react"
import { States } from '../../assets/states'

const API_KEY = "AIzaSyDsCAsDVamr-9rGO6DwtlXHcZL-8Tx5oeA"

export default function ElectedOfficials () {
    const [location, setLocation] = useState('');
    const getAddress = (e:any) => {
        e.preventDefault();
        const address = (e.target as HTMLInputElement).value;
        setLocation(address)
    }

    const onSubmit = async () => {
        fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${location}&includeOffices=true&levels=administrativeArea1&key=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data)
            })

    }
    return (
        <>
        <input type="text" onChange={getAddress} />
        <button onClick={onSubmit}>
            Search
        </button>

        </>
    )

}
