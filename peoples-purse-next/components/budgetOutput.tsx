import { useEffect } from "react"

export default function BudgetOutput(budget: any) {
    let totalBudget = 0
    console.log(budget.budget)
    let budgetArr = budget.budget
    budgetArr.forEach((dept: { percent: number }) => totalBudget += dept.percent)

    if(totalBudget === 100){
        return(
            <p>You're perfect</p>
        )
    } else if (totalBudget > 100) {
        return(
            <p>You're over by {100-totalBudget} points</p>
        )
    } else {
        return(
            <p>You still have {totalBudget-100} budget points remaining</p>
        )
    }
}