export default function DeptCards({ budget, updateBudget }: any) {
    console.log(updateBudget)
    return (
        <>
            {budget.map((dept: any) => {
                return (
                    <div key={dept.code}>
                        <p>{dept.name}</p>
                        <input onChange={updateBudget} type="number" min="1" max="100" value={dept.percent} />
                    </div>
                )
            })}
        </>
    )
}