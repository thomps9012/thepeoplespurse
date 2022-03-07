import { useEffect } from "react"

export default function BudgetOutput(budget: any) {
    let totalBudget = 0
    console.log(budget.budget)
    let budgetArr = budget.budget
    budgetArr.forEach((dept: { percent: number }) => totalBudget += dept.percent)
    useEffect(() => {
        if(totalBudget != 100) document.getElementById('voteSubmit')?.setAttribute('disabled', 'true')
    })
    if(totalBudget === 100){
        document.getElementById('voteSubmit')?.removeAttribute('disabled')
        return(
            <h1 className="flow-text" style={{fontWeight: 'bold'}}>Your Budget is Perfect</h1>
        )
    } else if (totalBudget > 100) {
        return(
            <h1 className="flow-text" style={{fontWeight: 'bold'}}>Over Budget by {totalBudget-100} Points</h1>
            )
        } else {
        return(
            <h1 className="flow-text" style={{fontWeight: 'bold'}}>{100-totalBudget} Budget Points Remaining</h1>
        )
    }
}