import { useEffect, useState } from 'react'
import { DeptInfo } from '../components/deptInfo'
import Image from 'next/image'

export default function DeptInformation() {
    const [singleDept, setDept] = useState({
        name: DeptInfo[0].name,
        abbr: DeptInfo[0].abbr,
        icon: DeptInfo[0].icon,
        mission: DeptInfo[0].mission,
        website: DeptInfo[0].website,
        code: DeptInfo[0].code
    })
    useEffect(() => {
        const init = async () => {
            const M = await import('materialize-css');
            const elems = document.querySelectorAll('select');
            const instances = M.FormSelect.init(elems);
        };
        init();
    });
    let handleChange = (e: any) => {
        const selected = e.target.value
        const newDept = DeptInfo.find(({ abbr }: any) => abbr === selected)
        if (newDept != undefined) setDept(newDept)
    }
    return (
        <div className='deptContainer'>
            <h5 style={{ textAlign: 'center', marginBottom: 20 }}>Department Select</h5>
                <select onChange={handleChange} className='icons'>
                    {DeptInfo.map((dept: any) => {
                        const { abbr, code, name, icon } = dept;
                        return (
                            <option value={abbr} key={code} data-icon={icon}>{name}</option>
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
            <div style={{ textAlign: 'center' }}>
                <a className='deptWebsite' href={singleDept.website} target={'_blank'} rel='noreferrer' >Visit Department Website</a>
            </div>
        </div>
    )
}

