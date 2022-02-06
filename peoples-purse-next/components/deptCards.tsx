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
                    <div key={dept.id} className="card hoverable teal lighten-2">
                        <p>{dept.name}</p>
                        <input
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