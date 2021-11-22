import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Apollo, gql } from 'apollo-angular';

const ALL_VOTES = gql`
  query Query {
    allVotes {
      budget {
        name
        percent
    }
  }
}
`;

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private apollo: Apollo) { }
  voteData?: any;
  updateData: any;
  ngOnInit() {
    this.voteData = this.apollo.query({
      query: ALL_VOTES
    }).subscribe(({ data }: any) => {

      let voteArr = data.allVotes;
      let finalData = [];
      // single vote functionality
      let keyVote = voteArr[0].budget;
      for (const key of keyVote) {
        let dept = key.name;
        let percent = key.percent
        finalData.push({ name: dept, value: percent })
      }
      this.voteData = finalData;
      // merges in new data
      this.updateData = {
        series: [{
          data: finalData
        }]
      }
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
  options: EChartsOption = {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Proposed Budget',
        type: 'pie',
        radius: [175, 225],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        }
      }
    ]
  };
}
