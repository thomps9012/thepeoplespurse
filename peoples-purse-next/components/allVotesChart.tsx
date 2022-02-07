import {
    useQuery,
    gql
} from '@apollo/client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const ALL_VOTES = gql`
  query Query {
    allVotes {
      totalVotes
      aggVotes {
        _id
        percent
      }
    }
  }
  `

const AllVotesCharts = () => {
    const { loading, error, data } = useQuery(ALL_VOTES);
    let avgVotes = [];
    let deptNames = [];
    if (data) {
        const allVotes = data.allVotes
        console.log(allVotes)
        for (const item in allVotes.aggVotes) {
            avgVotes.push(allVotes.aggVotes[item].percent / allVotes.totalVotes)
            deptNames.push(allVotes.aggVotes[item]._id)
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {JSON.stringify(error)}</p>;
    
    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true
    }
    const chartData = {
        labels: deptNames,
        datasets: [{
            label: 'Avg % of Votes for All Users',
            data: avgVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    return (
        <div className='container'>
            <Bar
                data={chartData}
                width={400}
                height={400}
                options={options}
                />
        </div>
    );
};

export default AllVotesCharts;