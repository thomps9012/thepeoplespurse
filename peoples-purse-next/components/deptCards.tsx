export default function DeptCards({ budget, updateBudget }: any) {
    // console.log(budget)
    return (
        <>
            {budget.map((dept: any) => {
                return (
                    <div key={dept.code}>
                        <p>{dept.name}</p>
                        <p>{dept.percent}</p>
                    </div>
                )
            })}
        </>
    )
}