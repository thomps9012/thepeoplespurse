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

const CLASS_VOTES = gql`
query Query($classId: ID!) {
  classVotes(classID: $classId) {
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
  classVotes?: any;
  classUpdate: any;

  ngOnInit() {
    // all results
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
    // class results
    this.classVotes = this.apollo.query({
      query: CLASS_VOTES,
      variables: {
        classId: localStorage.getItem('CLASS_CODE')
      }
    }).subscribe(({ data }: any) => {
      let classArr = data.classVotes;
      let finalClass: { name: any; value: any; }[] = [];
      let keyVote = classArr[0].budget;
      for (const key of keyVote) {
        let dept = key.name;
        let percent = key.percent;
        finalClass.push({ name: dept, value: percent})
      }
      classArr.map((vote: any) => {
        let singleVote = vote.budget;
        singleVote.map((detail: any) => {
          finalClass.map((dept: any) => {
            dept.value += detail.percent
          })
        })
      });
      this.classVotes = finalClass;
      console.log(finalClass)
      this.classUpdate = {
        series: [{
          data: finalClass
        }]
      }
    }, (error) => {
      console.log('there was an error sending the query', error);
      console.log(this.classVotes)
    });
  }

  toggleView() {
    let allResults = document.getElementById('allResults');
    let classResults = document.getElementById('classResults');
    allResults?.style.display != 'none'
      ? (allResults?.setAttribute('style', 'display: none'),
        classResults?.setAttribute('style', 'display: block'))
      : (allResults?.setAttribute('style', 'display: block'),
        classResults?.setAttribute('style', 'display: none'))
  }

  // all results options
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

  // class results options
  // classOptions: EChartsOption = {
  //   legend: {
  //     bottom: 150,
  //     left: 0,
  //     align: 'left',
  //     orient: 'vertical'
  //   },
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{a} <br/>{b} : {c} ({d}%)'
  //   },
  //   toolbox: {
  //     show: true,
  //     top: 'bottom',
  //     feature: {
  //       mark: { show: true },
  //       dataView: { show: true, readOnly: false },
  //       restore: { show: true },
  //       saveAsImage: { show: true }
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'Proposed ClaBudget',
  //       type: 'pie',
  //       radius: [175, 225],
  //       center: ['65%', '50%'],
  //       roseType: 'area',
  //       itemStyle: {
  //         borderRadius: 8
  //       }
  //     }
  //   ]
  // };
}
