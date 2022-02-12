import Image from 'next/image'

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
                return (
                    <div key={dept.id} id='deptVoteCard' className="card hoverable teal lighten-2">
                        <p>{dept.name}</p>
                        <Image
                            alt={dept.name + ' icon'}
                            height={75}
                            width={75}
                            src={dept.icon}
                            objectPosition={'center bottom'}
                        />
                        <input
                            className="center-align"
                            type="number" min="0" max="100"
                            id={dept.id}
                            name={dept.name}
                            value={dept.value}
                            onChange={(e: any) => update(e.target.id, e.target.value)}
                        />
                    </div>
                )
            })}
        </>
    )

}