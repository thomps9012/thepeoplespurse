import {
    useQuery,
    gql
} from '@apollo/client';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Skeleton from '@mui/material/Skeleton';

ChartJS.register(ArcElement, Tooltip, Legend);

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
        for (const item in allVotes.aggVotes) {
            const { aggVotes, totalVotes } = allVotes;
            avgVotes.push(aggVotes[item].percent / totalVotes)
            const dept = aggVotes[item]._id;
            // could abstract and encapsulate this code
            switch (dept) {
                case 'Department of Housing and Urban Development':
                    deptNames.push('HUD')
                    break;
                case 'Department of Treasury':
                    deptNames.push('USDT')
                    break;
                case 'Federal Communication Comission':
                    deptNames.push('FCC')
                    break;
                case 'Federal Election Comission':
                    deptNames.push('FEC')
                    break;
                case 'Department of Health and Human Services':
                    deptNames.push('DHHS')
                    break;
                case 'Department of Education':
                    deptNames.push('DoEd')
                    break;
                case 'Department of Transportation':
                    deptNames.push('DOT')
                    break;
                case 'Department of State':
                    deptNames.push('DOS')
                    break;
                case 'Department of Veterans Affairs':
                    deptNames.push('VA')
                    break;
                case 'Equal Opportunity Employment Commission':
                    deptNames.push('EEOC')
                    break;
                case 'Department of Energy':
                    deptNames.push('DOE')
                    break;
                case 'Social Security Administration':
                    deptNames.push('SSA')
                    break;
                case 'Department of Defense':
                    deptNames.push('DOD')
                    break;
                case 'Department of Homeland Security':
                    deptNames.push('DHS')
                    break;
                case 'National Aeronautics and Space Administration':
                    deptNames.push('NASA')
                    break;
                case 'Department of Justice':
                    deptNames.push('DOJ')
                    break;
                case 'Department of the Interior':
                    deptNames.push('DOI')
                    break;
                case 'Department of Labor':
                    deptNames.push('DOL')
                    break;
                case 'Environmental Protection Agency':
                    deptNames.push('EPA')
                    break;
                case 'Department of Agriculture':
                    deptNames.push('DOA')
                    break;
                case 'Federal Trade Comission':
                    deptNames.push('FTC')
                    break;
            }
        }
    }
    // if (loading) return <h1 id='loading' style={{ margin: 35, padding: 35, textAlign: 'center'}}>🛠 Give us just a minute here... 🛠 </h1>;
    if (loading) return <Skeleton />;
    if (error) return <h1 style={{ margin: 35, padding: 35, textAlign: 'center' }}>Error :( {JSON.stringify(error.message)}</h1>;

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        layout: {
            autoPadding: true
        },
        plugins: {
            legend: {
                position: 'bottom' as const,
                display: true
            },
            title: {
                display: true,
                text: 'Average of All Votes'
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        // could abstract and encapsulate this code
                        if (context.label === 'HUD') {
                            label += 'Department of Housing and Urban Development'
                        }
                        if (context.label === 'USDT') {
                            label += 'Department of Treasury'
                        }
                        if (context.label === 'FCC') {
                            label += 'Federal Communication Comission'
                        }
                        if (context.label === 'FEC') {
                            label += 'Federal Election Comission'
                        }
                        if (context.label === 'DHHS') {
                            label += 'Department of Health and Human Services'
                        }
                        if (context.label === 'DoEd') {
                            label += 'Department of Education'
                        }
                        if (context.label === 'DOT') {
                            label += 'Department of Transportation'
                        }
                        if (context.label === 'DOS') {
                            label += 'Department of State'
                        }
                        if (context.label === 'VA') {
                            label += 'Department of Veterans Affairs'
                        }
                        if (context.label === 'EEOC') {
                            label += 'Equal Opportunity Employment Commission'
                        }
                        if (context.label === 'DOE') {
                            label += 'Department of Energy'
                        }
                        if (context.label === 'SSA') {
                            label += 'Social Security Administration'
                        }
                        if (context.label === 'DOD') {
                            label += 'Department of Defense'
                        }
                        if (context.label === 'DHS') {
                            label += 'Department of Homeland Security'
                        }
                        if (context.label === 'NASA') {
                            label += 'National Aeronautics and Space Administration'
                        }
                        if (context.label === 'DOJ') {
                            label += 'Department of Justice'
                        }
                        if (context.label === 'DOI') {
                            label += 'Department of the Interior'
                        }
                        if (context.label === 'DOL') {
                            label += 'Department of Labor'
                        }
                        if (context.label === 'EPA') {
                            label += 'Environmental Protection Agency'
                        }
                        if (context.label === 'DOA') {
                            label += 'Department of Agriculture'
                        }
                        if (context.label === 'FTC') {
                            label += 'Federal Trade Comission'
                        }
                        if (context.parsed.x !== null) {
                            label += '  ' + context.parsed + '%'
                        }
                        return label;
                    }
                }
            },
        },
    };

    const chartData = {
        labels: deptNames,

        datasets: [{
            data: avgVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
        <div >
            <Doughnut
                data={chartData}
                options={options}
            />
        </div>
    );
};

export default AllVotesCharts;