import { Component, OnInit } from '@angular/core';
import { defenseDepts } from './defenseDepts';
import { depts } from './depts';
import { eduDepts } from './eduDepts';
import { enviroDepts } from './enviroDepts';
import { healthDepts } from './healthDepts';
import { developDepts } from './developDepts';
import { Apollo, gql } from 'apollo-angular';

const VOTE = gql`
  mutation Mutation($input: CastVote!) {
    castVote(input: $input) 
}
`;

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  depts = depts
  totalDept = 0
  userLoggedIn = localStorage.getItem('USER_ID')


  ngOnInit() {
    for (let i = 0; i < depts.length; i++) {
      this.totalDept += (depts[i].percent)
    }

  }

  updateBudget() {
    this.totalDept = 0;
    for (let i = 1; i <= 20; i++) {
      const number = <HTMLInputElement>document.getElementById(JSON.stringify(i))
      console.log(number.parentElement?.firstChild?.textContent)
      this.totalDept += JSON.parse(number.value)

      let totalArea = document.getElementById("totalBudget")
      let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
      if (this.totalDept > 100) {
        totalArea?.setAttribute('style', 'color: crimson')
        let dangerAlert = document.createElement("h1")
        dangerAlert.innerHTML += `Woah you've used ${this.totalDept - 100} percent more than your budget`;
        budgetAlert.innerHTML = "";
        budgetAlert?.append(dangerAlert);
      } else if (this.totalDept === 100) {
        totalArea?.setAttribute('style', 'color: green')
        let dangerAlert = document.createElement("h1")
        dangerAlert.innerHTML += "You're perfect!";
        budgetAlert.innerHTML = "";
        budgetAlert?.append(dangerAlert);
      } else {
        totalArea?.setAttribute('style', 'color: goldenrod')
        let dangerAlert = document.createElement("h1")
        dangerAlert.innerHTML += `You still have ${100 - this.totalDept} percent of your budget remaining`;
        budgetAlert.innerHTML = "";
        budgetAlert?.append(dangerAlert);
      }
    }
  }

  evenDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    for (let i = 1; i <= 20; i++) {
      const dept = <HTMLInputElement>document.getElementById(JSON.stringify(i))
      dept.value = '5';
      totalArea?.setAttribute('style', 'color: green')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML += "You're perfect!";
      budgetAlert.innerHTML = "";
      budgetAlert?.append(dangerAlert);
    }
  }

  educationDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'color: green')
    let dangerAlert = document.createElement("h1")
    dangerAlert.innerHTML += "You're perfect!";
    budgetAlert.innerHTML = "";
    budgetAlert?.append(dangerAlert);
    this.depts = eduDepts;
  }

  enviroDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'color: green')
    let dangerAlert = document.createElement("h1")
    dangerAlert.innerHTML += "You're perfect!";
    budgetAlert.innerHTML = "";
    budgetAlert?.append(dangerAlert);
    this.depts = enviroDepts;
  }

  healthDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'color: green')
    let dangerAlert = document.createElement("h1")
    dangerAlert.innerHTML += "You're perfect!";
    budgetAlert.innerHTML = "";
    budgetAlert?.append(dangerAlert);
    this.depts = healthDepts;
  }

  defenseDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'color: green')
    let dangerAlert = document.createElement("h1")
    dangerAlert.innerHTML += "You're perfect!";
    budgetAlert.innerHTML = "";
    budgetAlert?.append(dangerAlert);
    this.depts = defenseDepts;
  }

  developDist() {
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'color: green')
    let dangerAlert = document.createElement("h1")
    dangerAlert.innerHTML += "You're perfect!";
    budgetAlert.innerHTML = "";
    budgetAlert?.append(dangerAlert);
    this.depts = developDepts;
  }

  resetBudget() {
    window.location.reload();
  }

  submitBudget(event: Event) {
    event.preventDefault();
    if (this.totalDept > 100) {
      alert(`You've used too much of your budget, please remove ${this.totalDept - 100} points from your budget before submitting.`)

    }
    else {
      const voter = localStorage.getItem('USER_ID');
      const classCode = localStorage.getItem('CLASS_CODE') ? localStorage.getItem('CLASS_CODE') : ''
      let budget = []

      for(let i=1; i<=20; i++){
        const rawData = <HTMLInputElement>document.getElementById(JSON.stringify(i))
        const dept = {
          name: rawData.parentElement?.firstChild?.textContent,
          code: rawData.id,
          percent: JSON.parse(rawData.value)
        }
        budget.push(dept)
      }
      
      this.apollo.mutate({
        mutation: VOTE,
        variables: {
          input: {
            voter: voter,
            budget: budget,
            classCode: classCode
          }
        }
      }).subscribe(({ data }: any) => {
        console.log('got data', data);
        alert("Your vote has been successfully recorded")
        window.location.replace('/results')
      }, (error) => {
        console.log('there was an error sending the mutation', error);
        alert('You need to be logged in to cast a vote.')
      });
    }
  }
}
