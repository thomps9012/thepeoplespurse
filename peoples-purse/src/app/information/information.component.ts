import { Component, OnInit } from '@angular/core';
import { DeptInfo } from './deptInfo';
import { States } from './states'
declare var gapi: any;

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  DeptInfo = DeptInfo;
  States = States;

  constructor() { }

  ngOnInit(): void {
    gapi.load('client');
  }

  displayDept = (event: Event) => {
    event.preventDefault();
    const selectedDept = (event.target as HTMLSelectElement).value;
    const deptInfoDiv = document.getElementById('deptInfo');
    if (deptInfoDiv != null) { deptInfoDiv.innerHTML = ""; }
    const seal = document.createElement('img')
    const name = document.createElement('h3')
    const mission = document.createElement('p')
    const website = document.createElement('a')

    for (let i = 0; i < DeptInfo.length; i++) {
      if (DeptInfo[i].name === selectedDept) {
        seal.src = DeptInfo[i].icon;
        seal.width = 200;
        seal.height = 200;
        name.append(DeptInfo[i].name);
        mission.append(DeptInfo[i].mission);
        website.href = DeptInfo[i].website;
        website.target = '_blank';
        website.append('Visit Department Website');

        deptInfoDiv?.append(name)
        deptInfoDiv?.append(seal)
        deptInfoDiv?.append(mission)
        deptInfoDiv?.append(website)
      }
    }
  }


  location = '';
  getAddress = (event: Event) => {
    event.preventDefault();
    const address = (event.target as HTMLInputElement).value;
    this.location = address;

  }

  loadClient() {
    gapi.client.init({
      'apiKey': "AIzaSyDsCAsDVamr-9rGO6DwtlXHcZL-8Tx5oeA"
    })
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err: any) { console.error("Error loading GAPI client for API", err); });
  }



  async onSubmit(location: any) {
    await this.loadClient()
    const officialDiv = document.getElementById('official-display');
    if (officialDiv != null) { officialDiv.innerHTML = ""; }
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": location,
    })
      .then(function (response: any) {
        const officeRes = response.result.offices;
        const officials = response.result.officials
        console.log(officials)
        const title = document.createElement('h1');
        title.append('Elected Officials and Level of Government')
        officialDiv?.append(title)
        const nationalTitle = document.createElement('h3')
        nationalTitle.append('National Level Offices')
        const national = document.createElement('ul')

        const stateTitle = document.createElement('h3')
        stateTitle.append('State Level Offices')
        const state = document.createElement('ul')

        const countyTitle = document.createElement('h3')
        countyTitle.append('County Level Offices')
        const county = document.createElement('ul')

        officeRes.map((office: any) => {
          if (office.levels[0] === 'country') {
            const lvlOfficials = office.officialIndices;
            const nationalList = document.createElement('li')
            nationalList.append(office.name)
            let officialList = document.createElement('ul')
            // console.log(lvlOfficials)
            nationalList.append(officialList)
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              // turn this into a card
              let officialListItem = document.createElement('a')
              officialListItem.setAttribute("id", lvlOfficials[i])
              officialListItem.setAttribute('target', '_blank')
              console.log(officials[lvlOfficials[i]])
              // set in some custom styling
              officialListItem.setAttribute("href", officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`)
              // add in dynamically rendered phone number
              let contactPhone = document.createElement('p')
              let phoneTitle = document.createElement('h5')
              phoneTitle.append('Phone Number:')
              {
                officials[lvlOfficials[i]].phones ?
                contactPhone.append(officials[lvlOfficials[i]].phones[0])
                : 'N/A'
              }
              // add in dynamically rendered party
              let party = document.createElement('p')
              let partyTitle = document.createElement('h5')
              partyTitle.append('Party:')
              {
                officials[lvlOfficials[i]].party ?
                party.append(officials[lvlOfficials[i]].party)
                : 'N/A'
              }
              // add in dynamically rendered address
              let address = document.createElement('div')
              let addressTitle = document.createElement('h5')
              addressTitle.append('Address:')
              {
                officials[lvlOfficials[i]].address ?
                address.innerText=(`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}, 
                ${officials[lvlOfficials[i]].address[0].zip}`)
                : 'N/A'
              }

              officialListItem.append(officials[lvlOfficials[i]].name)
              officialList.append(officialListItem)
              officialList.append(partyTitle)
              officialList.append(party)
              officialList.append(addressTitle)
              officialList.append(address)
              officialList.append(phoneTitle)
              officialList.append(contactPhone)
            }
            // end of recreated code
            // ****************************************************************************
            national.append(nationalList)
          } else if (office.levels[0] === 'administrativeArea1') {
            const lvlOfficials = office.officialIndices;
            const stateList = document.createElement('li')
            stateList.append(office.name)
            let officialList = document.createElement('ul')
            stateList.append(officialList)
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              // turn this into a card
              let officialListItem = document.createElement('a')
              officialListItem.setAttribute("id", lvlOfficials[i])
              officialListItem.setAttribute('target', '_blank')
              console.log(officials[lvlOfficials[i]])
              // set in some custom styling
              officialListItem.setAttribute("href", officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`)
              // add in dynamically rendered phone number
              let contactPhone = document.createElement('p')
              let phoneTitle = document.createElement('h5')
              phoneTitle.append('Phone Number:')
              {
                officials[lvlOfficials[i]].phones ?
                contactPhone.append(officials[lvlOfficials[i]].phones[0])
                : 'N/A'
              }
              // add in dynamically rendered party
              let party = document.createElement('p')
              let partyTitle = document.createElement('h5')
              partyTitle.append('Party:')
              {
                officials[lvlOfficials[i]].party ?
                party.append(officials[lvlOfficials[i]].party)
                : 'N/A'
              }
              // add in dynamically rendered address
              let address = document.createElement('div')
              let addressTitle = document.createElement('h5')
              addressTitle.append('Address:')
              {
                officials[lvlOfficials[i]].address ?
                address.innerText=(`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}, 
                ${officials[lvlOfficials[i]].address[0].zip}`)
                : 'N/A'
              }

              officialListItem.append(officials[lvlOfficials[i]].name)
              officialList.append(officialListItem)
              officialList.append(partyTitle)
              officialList.append(party)
              officialList.append(addressTitle)
              officialList.append(address)
              officialList.append(phoneTitle)
              officialList.append(contactPhone)
            }
            // end of recreated code
            // ****************************************************************************
            state.append(stateList)
          } else if (office.levels[0] === 'administrativeArea2') {
            const lvlOfficials = office.officialIndices
            const countyList = document.createElement('li')
            countyList.append(office.name)
            let officialList = document.createElement('ul')
            countyList.append(officialList)
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              // turn this into a card
              let officialListItem = document.createElement('a')
              officialListItem.setAttribute("id", lvlOfficials[i])
              officialListItem.setAttribute('target', '_blank')
              console.log(officials[lvlOfficials[i]])
              // set in some custom styling
              officialListItem.setAttribute("href", officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`)
              // add in dynamically rendered phone number
              let contactPhone = document.createElement('p')
              let phoneTitle = document.createElement('h5')
              phoneTitle.append('Phone Number:')
              {
                officials[lvlOfficials[i]].phones ?
                contactPhone.append(officials[lvlOfficials[i]].phones[0])
                : 'N/A'
              }
              // add in dynamically rendered party
              let party = document.createElement('p')
              let partyTitle = document.createElement('h5')
              partyTitle.append('Party:')
              {
                officials[lvlOfficials[i]].party ?
                party.append(officials[lvlOfficials[i]].party)
                : 'N/A'
              }
              // add in dynamically rendered address
              let address = document.createElement('div')
              let addressTitle = document.createElement('h5')
              addressTitle.append('Address:')
              {
                officials[lvlOfficials[i]].address ?
                address.innerText=(`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}, 
                ${officials[lvlOfficials[i]].address[0].zip}`)
                : 'N/A'
              }

              officialListItem.append(officials[lvlOfficials[i]].name)
              officialList.append(officialListItem)
              officialList.append(partyTitle)
              officialList.append(party)
              officialList.append(addressTitle)
              officialList.append(address)
              officialList.append(phoneTitle)
              officialList.append(contactPhone)
            }
            // end of recreated code
            // ****************************************************************************
            county.append(countyList)
          }
        })
        officialDiv?.append(nationalTitle)
        officialDiv?.append(national)

        officialDiv?.append(stateTitle)
        officialDiv?.append(state)

        officialDiv?.append(countyTitle)
        officialDiv?.append(county)

        let header = document.createElement('h3');

        officialDiv?.append(header ? header : '')

      },
        function (err: any) { console.error("Execute error", err); });
  }

}
