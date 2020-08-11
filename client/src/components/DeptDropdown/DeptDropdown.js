import React, { Component } from 'react';
import "./style.css";
import API from "../../utils/axiosCalls";

class DeptDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Department of State',
      name: 'Department of State',
      year: '2020',
      abbr: 'DOS',
      icon: 'DOS.jpg',
      mission: 'The Departments mission is to shape and sustain a peaceful, prosperous, just, and democratic world and foster conditions for stability and progress for the benefit of the American people and people everywhere.This mission is shared with the USAID, ensuring we have a common path forward in partnership as we invest in the shared security and prosperity that will ultimately better prepare us for the challenges of tomorrow.',
      website: 'https://www.state.gov/',
      code: "019",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, () => this.setAgencyCode())
  }

  setAgencyCode = () => {
    const agencyCode = this.state.value
    this.getAgencyInfo(agencyCode)
  }

  getAgencyInfo = (agencyCode) => {
    API.getAgencyInfo(agencyCode)
      .then((response) => {
        this.updateAgencyContent(response)
      })
      .catch(err => console.log(err));
  }

  updateAgencyContent = (response) => {
    const results = response.data;
    this.setState({
      name: results.name,
      year: results.fiscal_year,
      abbr: results.abbreviation,
      icon: results.icon_filename,
      mission: results.mission,
      website: results.website,
      code: results.toptier_code
    })
  }

  render() {
    return (
      <div className="deptDrop">
        <select value={this.state.value} onChange={this.handleChange}>
          <option defaultValue value="019" id="019">Dept of State</option>
          <option value="097" id="097">Dept of Defense</option>
          <option value="089" id="089">Dept of Energy</option>
          <option value="1601" id="1601">Dept of Labor</option>
          <option value="012" id="012">Dept of Agriculture</option>
          <option value="070" id="070">Dept of Homeland Security</option>
          <option value="069" id="069">Dept of Transportation</option>
          <option value="013" id="013">Dept of Commerce</option>
          <option value="091" id="091">Dept of Education</option>
          <option value="075" id="075">Dept of Health and Human Services</option>
          <option value="086" id="086">Dept of Housing and Urban Development</option>
          <option value="015" id="015">Dept of Justice</option>
          <option value="014" id="014">Dept of the Interior</option>
          <option value="020" id="020">Dept of the Treasury</option>
          <option value="068" id="068">Environmental Protection Agency</option>
          <option value="027" id="027">Federal Communication Comission</option>
          <option value="360" id="360">Federal Election Comission</option>
          <option value="029" id="029">Federal Trade Comission</option>
          <option value="045" id="045">Equal Employment Opportunity Comission</option>
          <option value="028" id="028">Social Security</option>
        </select>

        <section>
          <h2>{this.state.name} ({this.state.abbr})</h2>
          <p className="code">The {this.state.name}'s Top Tier Code is {this.state.code}</p>
          <p className="year">The fiscal year is {this.state.year}</p>
          <p className="mission">{this.state.mission}</p>
          <p className="link">Visit agency website for more info at <a href={this.state.website} target="_balnk"> {this.state.website}</a></p>
        </section>
      </div>
    )
  }
}
export default DeptDropdown;