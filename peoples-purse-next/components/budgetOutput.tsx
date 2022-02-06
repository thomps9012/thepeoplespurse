import { useEffect } from "react"

export default function BudgetOutput(budget: any) {
    let totalBudget = 0
    console.log(budget.budget)
    let budgetArr = budget.budget
    budgetArr.forEach((dept: { percent: number }) => totalBudget += dept.percent)
    useEffect(() => {
        if(totalBudget!= 100) document.getElementById('voteSubmit')?.setAttribute('disabled', 'true')
    })
    if(totalBudget === 100){
        document.getElementById('voteSubmit')?.removeAttribute('disabled')
        return(
            <h2 className="flow-text">Your Budget is Perfect</h2>
        )
    } else if (totalBudget > 100) {
        return(
            <h2 className="flow-text">Over Budget by {totalBudget-100} Points</h2>
            )
        } else {
        return(
            <h2 className="flow-text">{100-totalBudget} Budget Points Remaining</h2>
        )
    }
}