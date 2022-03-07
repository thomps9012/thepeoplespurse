import AllVotesCharts from '../components/allVotesChart';
// import ClassSelect from '../components/classSelect';

export default function BudgetResults() {
  return (
    <>
      {/* <ClassSelect /> */}
      <div id='chart'>
        <h1 style={{textAlign: 'center', margin: 10}}>Average of All Votes</h1>
        <AllVotesCharts />
      </div>
    </>
  )
}