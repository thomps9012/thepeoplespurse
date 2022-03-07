import Image from 'next/image'
import TextField from '@mui/material/TextField';

export default function DeptCards({ budget, updateBudget }: any) {
    let update = ((code: number, value: any) => {
        let percent = 'percent'
        if (value === '') { value = 0 } else { value = JSON.parse(value) }
        console.log(budget[code])
        let tempArr = budget.slice();
        tempArr[code - 1][percent] = value;
        updateBudget(tempArr)
    })
    return (
        <>
            {budget.map((dept: any) => {
                const { name, icon, id, value } = dept;
                return (
                    <div key={id} id='deptVoteCard' className="card hoverable">
                        <div className='dept-card-content'>
                            <p style={{ marginBottom: 10, padding: 5 }}>{name}</p>
                            {name === 'National Aeronautics and Space Administration' ?
                                <Image
                                    alt={name + ' icon'}
                                    height={50}
                                    width={60}
                                    src={icon}
                                    objectPosition={'center bottom'}
                                />
                                : <Image
                                    alt={name + ' icon'}
                                    height={75}
                                    width={75}
                                    src={icon}
                                    objectPosition={'center bottom'}
                                />
                            }
                        </div>
                        <div className='card-action'>
                            <TextField
                                name={name}
                                value={value}
                                type='number'
                                id={id}
                                label='Dept Points'
                                onChange={(e: any) => update(e.target.id, e.target.value)}
                            />
                        </div>
                    </div>
                )
            })}
        </>
    )

}