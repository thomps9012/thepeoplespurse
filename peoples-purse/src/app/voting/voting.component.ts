import { Component, OnInit } from '@angular/core';
import { depts } from './depts';
import { eduDepts } from './eduDepts';

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  depts = depts
  constructor() { }
  totalDept= 0
  
  ngOnInit() {
    for(let i=0; i< depts.length; i++) {
      this.totalDept += (depts[i].percent)
    }
    
  }

  updateBudget() {
    this.totalDept = 0;
    for(let i=1; i<= 20; i++) {
      const number = <HTMLInputElement>document.getElementById(JSON.stringify(i))
      console.log(number.value)
      this.totalDept += JSON.parse(number.value)
    }
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    if(this.totalDept > 100){
      totalArea?.setAttribute('style', 'background-color: red')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML+=`Woah you've used ${this.totalDept-100} percent more than your budget`;
      budgetAlert.innerHTML="";
      budgetAlert?.append(dangerAlert);
    } else if (this.totalDept === 100){
      totalArea?.setAttribute('style', 'background-color: green')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML+="You're perfect!";
      budgetAlert.innerHTML="";
      budgetAlert?.append(dangerAlert);
    } else {
      totalArea?.setAttribute('style', 'background-color: yellow')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML+=`You still have ${100-this.totalDept} percent of your budget remaining`;
      budgetAlert.innerHTML="";
      budgetAlert?.append(dangerAlert);
    }
  }

  evenDist(event: Event) {
    event.preventDefault()
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    for(let i=1; i<=20; i++) {
      const dept = <HTMLInputElement>document.getElementById(JSON.stringify(i))
      dept.value = '5';
      totalArea?.setAttribute('style', 'background-color: green')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML+="You're perfect!";
      budgetAlert.innerHTML="";
      budgetAlert?.append(dangerAlert);
    }
  }
  educationDist(event: Event) {
    event.preventDefault()
    this.totalDept = 100;
    let totalArea = document.getElementById("totalBudget")
    let budgetAlert = <HTMLElement>document.getElementById('budgetAlert')
    totalArea?.setAttribute('style', 'background-color: green')
      let dangerAlert = document.createElement("h1")
      dangerAlert.innerHTML+="You're perfect!";
      budgetAlert.innerHTML="";
      budgetAlert?.append(dangerAlert);
      this.depts = eduDepts;
  }
  enviroDist(event: Event) {
    event.preventDefault()}
  healthDist(event: Event) {
    event.preventDefault()}
  defenseDist(event: Event) {
    event.preventDefault()}
  transportDist(event: Event) {
    event.preventDefault()}
}
