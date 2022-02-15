import AllVotesCharts from '../components/allVotesChart';
import ClassSelect from '../components/classSelect';



export default function BudgetResults() {
  return (
    <>
      {/* <ClassSelect /> */}
      <div id='chart'>
        <h5 style={{textAlign: 'center', margin: 10}}>Average of All Votes</h5>
        <AllVotesCharts />
      </div>
    </>
  )
}