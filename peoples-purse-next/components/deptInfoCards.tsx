import { useState } from 'react'
import { DeptInfo } from './deptInfo'
import Image from 'next/image'
import DOS from '../deptImgs/deptOfState.png'
import DOE from '../deptImgs/DeptOfEnergy.png'
import DOL from '../deptImgs/deptOfLabor.png'
import DOA from '../deptImgs/usda-symbol.svg'
import DOHS from '../deptImgs/homelandSecurity.png'
import DOT from '../deptImgs/transportation.png'
import DOED from '../deptImgs/deptOfEdu.png'
import DOHHS from '../deptImgs/deptOfHealth.png'
import HUD from '../deptImgs/housingUrbanDevelopment.png'
import DOJ from '../deptImgs/justice.png'
import EPA from '../deptImgs/epa.png'
import DOI from '../deptImgs/deptOfInt.png'
import FCC from '../deptImgs/fcc.png'
import FEC from '../deptImgs/fec.png'
import EEOC from '../deptImgs/equalEmployment.png'
import SSA from '../deptImgs/socialSecurity.png'
import FTC from '../deptImgs/ftc.png'
import DO$ from '../deptImgs/treasury.png'

export default function DeptInfoCards() {
    console.log(DeptInfo)
    const [singleDept, setDept] = useState({
        name: DeptInfo[0].name,
        abbr: DeptInfo[0].abbr,
        icon: DeptInfo[0].icon,
        mission: DeptInfo[0].mission,
        website: DeptInfo[0].website,
        code: DeptInfo[0].code
    })
    let handleChange = (e: any) => {
        const code = e.target.value
        console.log(code)
        // console.log(DeptInfo)
        const newDept = DeptInfo.find(({abbr}) => abbr === code)
        console.log(newDept)
        if(newDept!= undefined) setDept(newDept)
        document.getElementById('deptSeal')?.setAttribute('key', '../deptImgs/Defense.png')
    }
    return (
        <>
            <h1>Select a Department to Learn About</h1>
            <select onChange={handleChange}>
                {DeptInfo.map((dept: any) => {
                    return (
                        <option value={dept.abbr} key={dept.code}>{dept.name}</option>
                    )
                })}
            </select>
            <div id='deptDetail' key={singleDept.code}>
                <Image
                    id='deptSeal'
                    src={DOS}
                    loading='eager'
                    alt='Department Seal'
                    width={200}
                    height={200}
                />
                <h3>{singleDept.name}</h3>
                <p>{singleDept.mission}</p>
                <a href={singleDept.website} target={'_blank'}>Visit Website</a>
            </div>
        </>
    )
}