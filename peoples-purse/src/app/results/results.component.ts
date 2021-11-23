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
  [x: string]: any;

  constructor(private apollo: Apollo) { }
  voteData?: any;
  updateData: any;
  ngOnInit() {
    this.voteData = this.apollo.query({
      query: ALL_VOTES
    }).subscribe(({ data }: any) => {
      let voteArr = data.allVotes;
      let finalData: { name: any; value: any; }[] = [];
      let keyVote = voteArr[0].budget;
      for (const key of keyVote) {
        let dept = key.name;
        let percent = key.percent
        finalData.push({ name: dept, value: percent })
      }
      voteArr.map((vote: any) => {
        let singleVote = vote.budget;
        singleVote.map((detail: any) => {
          finalData.map((dept: any) => {
            dept.value += detail.percent
          })
        })
      });
      this.voteData = finalData;
      console.log(finalData)
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
      bottom: 150,
      left: 0,
      align: 'left',
      orient: 'vertical'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      top: 'bottom',
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
        center: ['65%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        }
      }
    ]
  };
}
