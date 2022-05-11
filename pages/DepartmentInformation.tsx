import { useState } from 'react'
import { DeptInfo } from '../components/deptInfo'
import Image from 'next/image'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function DeptInformation() {
    const [singleDept, setDept] = useState({
        name: DeptInfo[0].name,
        abbr: DeptInfo[0].abbr,
        icon: DeptInfo[0].icon,
        mission: DeptInfo[0].mission,
        website: DeptInfo[0].website,
        code: DeptInfo[0].code
    })
    //   possibly replace with own select to avoid issues
    let handleChange = (e: any) => {
        const selected = e.target.value
        const newDept = DeptInfo.find(({ abbr }: any) => abbr === selected)
        if (newDept != undefined) setDept(newDept)
    }
    return (
        <div className='deptContainer'>
            <h3 style={{ textAlign: 'center', marginBottom: 20 }}>Select a Department Below to Learn About</h3>
            <FormControl fullWidth>
                <InputLabel>Department</InputLabel>
                <Select onChange={handleChange} label='Department'>
                    {DeptInfo.map((dept: any) => {
                        const { abbr, code, name } = dept;
                        return (
                            <MenuItem value={abbr} key={code}>{name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <div id='deptDetail' key={singleDept.code} style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    id='deptSeal'
                    src={singleDept.icon}
                    loading='eager'
                    alt='Department Seal'
                    width={200}
                    height={200}

                />
            </div>
            <h6 className='deptName'>{singleDept.name}</h6>
            <p className='missionTitle'>Mission</p>
            <p className='deptMission'>{singleDept.mission}</p>
            <div style={{ textAlign: 'center' }}>
                <a className='deptWebsite' href={singleDept.website} target={'_blank'} rel='noreferrer' >Visit Department Website</a>
            </div>
        </div>
    )
}

