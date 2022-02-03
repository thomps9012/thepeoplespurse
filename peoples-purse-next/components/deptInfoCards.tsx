import { useState } from 'react'
import { DeptInfo } from './deptInfo'
import Image from 'next/image'

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
        const newDept = DeptInfo.find(({abbr}) => abbr === code)
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
                    src={singleDept.icon}
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