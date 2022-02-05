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
            <p>You're perfect</p>
        )
    } else if (totalBudget > 100) {
        return(
            <p>You're over by {totalBudget-100} points</p>
            )
        } else {
        return(
            <p>You still have {100-totalBudget} budget points remaining</p>
        )
    }
}