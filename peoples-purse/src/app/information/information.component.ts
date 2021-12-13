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
  showDeptInput() {
    let deptDiv = document.getElementById('deptInput');
    deptDiv?.style.display != 'none' ? deptDiv?.setAttribute('style', 'display: none') : deptDiv.setAttribute('style', 'display: block')
  }
  showAddressInput() {
    let addressDiv = document.getElementById('addressInput');
    addressDiv?.style.display != 'none' ? addressDiv?.setAttribute('style', 'display: none') : addressDiv.setAttribute('style', 'display: block')
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
    const sheet = document.createElement('style');
    sheet.innerHTML = `
            a {
              text-decoration: none;
              color: black;
              size: large;
            }

            a:hover {
              transform: translateY(-3px);
              color: white;
              text-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
            }
              `;
    document.body.appendChild(sheet)

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

        deptInfoDiv?.append(website)
        deptInfoDiv?.append(name)
        deptInfoDiv?.append(mission)
        deptInfoDiv?.append(seal)
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

        const nationalTitle = document.createElement('h1')
        nationalTitle.append('National Level')
        const nationalTable = document.createElement('table')
        nationalTitle.setAttribute('class', 'mystyles')

        const stateTitle = document.createElement('h1')
        stateTitle.append('State Level')
        const stateTable = document.createElement('table')
        stateTitle.setAttribute('class', 'mystyles')

        const countyTitle = document.createElement('h1')
        countyTitle.append('County Level')
        const countyTable = document.createElement('table')
        countyTitle.setAttribute('class', 'mystyles')

        const officeHeaders = `
        <thead>
        <tr>
        <th> Office </th>
        <th> Official </th>
        <th> Party </th>
        <th> Address </th>
        <th> Phone </th>
        </tr>
        </thead>
        `;

        nationalTable.innerHTML += (officeHeaders)
        stateTable.innerHTML += (officeHeaders)
        countyTable.innerHTML += (officeHeaders)

        const nationalBody = document.createElement('tbody')
        const stateBody = document.createElement('tbody')
        const countyBody = document.createElement('tbody')

        officeRes.map((office: any) => {
          if (office.levels[0] === 'country') {
            const lvlOfficials = office.officialIndices;
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              const nationalOfficial = `
              <tr>
              <td>
              ${office.name}
              </td>
              <td>
              <a target="_blank" href=${officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`}> ${officials[lvlOfficials[i]].name}</a>
              </td>
              <td>
              ${officials[lvlOfficials[i]].party
                  ? officials[lvlOfficials[i]].party
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].address ?
                  (`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}`)
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].phones
                  ? officials[lvlOfficials[i]].phones[0]
                  : 'N/A'
                }
              </td>
              </tr>
              `;
              nationalBody.innerHTML += (nationalOfficial)
            }
            nationalTable.append(nationalBody);
            // end of recreated code
            // ****************************************************************************
          } else if (office.levels[0] === 'administrativeArea1') {
            const lvlOfficials = office.officialIndices;
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              const stateOfficial = `
              <tr>
              <td>
              ${office.name}
              </td>
              <td>
              <a target="_blank" href=${officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`}> ${officials[lvlOfficials[i]].name}</a>
              </td>
              <td>
              ${officials[lvlOfficials[i]].party
                  ? officials[lvlOfficials[i]].party
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].address ?
                  (`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}`)
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].phones
                  ? officials[lvlOfficials[i]].phones[0]
                  : 'N/A'
                }
              </td>
              </tr>
              `;
              stateBody.innerHTML += (stateOfficial)
            }
            stateTable.append(stateBody);
            // end of recreated code
            // ****************************************************************************
          } else if (office.levels[0] === 'administrativeArea2') {
            const lvlOfficials = office.officialIndices
            // ******************************************************************************
            // this code is recreated
            for (let i = 0; i < lvlOfficials.length; i++) {
              const countyOfficial = `
              <tr>
              <td>
              ${office.name}
              </td>
              <td>
              <a target="_blank" href=${officials[lvlOfficials[i]].urls ? officials[lvlOfficials[i]].urls[0] : `https://www.google.com/search?q=${officials[lvlOfficials[i]].name}`}> ${officials[lvlOfficials[i]].name}</a>
              </td>
              <td>
              ${officials[lvlOfficials[i]].party
                  ? officials[lvlOfficials[i]].party
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].address ?
                  (`${officials[lvlOfficials[i]].address[0].line1},
                ${officials[lvlOfficials[i]].address[0].city}, ${officials[lvlOfficials[i]].address[0].state}`)
                  : 'N/A'
                }
              </td>
              <td>
              ${officials[lvlOfficials[i]].phones
                  ? officials[lvlOfficials[i]].phones[0]
                  : 'N/A'
                }
              </td>
              </tr>
              `;
              countyBody.innerHTML += (countyOfficial)
            }
            // end of recreated code
            // ****************************************************************************
            countyTable.append(countyBody)
          }
        })
        officialDiv?.append(nationalTitle)
        officialDiv?.append(nationalTable)

        officialDiv?.append(stateTitle)
        officialDiv?.append(stateTable)

        officialDiv?.append(countyTitle)
        officialDiv?.append(countyTable)

        const sheet = document.createElement('style');
        sheet.innerHTML = `
        table {
          width: 100%;
          border-radius(5px);
          font-family: Roboto, "Helvetica Neue", sans-serif;
      }

      .mystyles {
        color: black;
        border-solid: 1px;
      }
      
      thead {
          background-color: #333;
          color: #fff;
          font-size: x-large;
          font-weight: lighter;
      }
      
      td, th {
          border: 1px solid #999;
          padding: 0.5rem;
          font-size: large;
        }
      
      tbody tr:nth-child(odd) {
          background: #eee;
        }

      tbody tr:nth-child(even) {
          background: white;
        }

        tbody tr:hover {
          background: goldenrod;
          color: white;
        }

        h1 {
          color: black;
          text-align: center;
      }

      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        transform: translateY(-3px);
        color: white;
        text-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
      }
        `;
        document.body.appendChild(sheet)
      },
        function (err: any) { console.error("Execute error", err); });
  }

}
