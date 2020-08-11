import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./PieChart.css";

const state = {
    labels: [
        'Department of Health and Human Services',
        'Department of Defense',
        'Social Security Administration',
        'Department of the Treasury',
        'Department of Veterans Affairs',
        'Department of Agriculture',
        'Office of Personnel Management',
        'Department of Homeland Security',
        'Department of Education'
    ],
    datasets: [
        {
            label: '2020 Federal Budget',
            backgroundColor: [

                '#124e73',
                '#176fa6',
                '#11A8BD',
                '#10B39A',
                '#08C976',

                '#F9F03E',
                '#f2c849',
                '#f2b138',
                '#F9A23E',
                '#f29829'


            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [945677774172, 629424896012, 606454436574, 580584099932, 117104778676, 112715655815, 106956326872, 44143415056, 42402568825, 39180908739]
        }
    ]
}

class PieChart extends React.Component {
    render() {
        return (
            <div className="PieChart">
                <Pie
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: '2020 Federal Budget',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default PieChart;