import { useEffect, useState } from 'react'
import { DeptInfo } from '../components/deptInfo'
import Image from 'next/image'

export default function DeptInformation() {
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
        const newDept = DeptInfo.find(({ abbr }: any) => abbr === code)
        if (newDept != undefined) setDept(newDept)
        document.getElementById('deptSeal')?.setAttribute('key', '../deptImgs/Defense.png')
    }
    useEffect(() => {
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('select');
            const instances = M.FormSelect.init(elems);
        };
        init();
    });
    return (
        <div className='deptContainer'>
            <h5 style={{textAlign: 'center', marginBottom: 20}}>Department Select</h5>
            <label></label>
            <select onChange={handleChange}>
                {DeptInfo.map((dept: any) => {
                    return (
                        <option value={dept.abbr} key={dept.code}>{dept.name}</option>
                    )
                })}
            </select>
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
            {/* linting issue here */}
            <a className='deptWebsite' href={singleDept.website} target={'_blank'} rel='noreferrer'>Visit Department Website</a>
        </div>
    )
}

