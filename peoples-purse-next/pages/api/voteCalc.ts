// this can be moved to the backend
export default async function VoteCalculator(allVotes: any) {
  let finalBudget: { name: string; value: number; }[] = []
  let keyVote = allVotes[0].budget;
  for (const key of keyVote) {
    let dept = key.name;
    let percent = key.percent;
    finalBudget.push({ name: dept, value: percent })
    console.log(dept, percent)
  }
  allVotes.map((vote: any) => {
    let singleVote = vote.budget;
    console.log(singleVote)
    singleVote.map((detail: any) => {
      console.log(detail)
      if(detail.name )
      console.log(finalBudget)
    })
  })
  return finalBudget

}