import React, { Component } from 'react';
import "./style.css";
// import DeptInfo from './DeptInfo';
// import code from './DeptInfo';

const DeptInfo = [
  // dept of state info
  {
    value: 'Department of State',
    name: 'Department of State',
    year: '2020',
    abbr: 'DOS',
    icon: 'DOS.jpg',
    mission: 'The Departments mission is to shape and sustain a peaceful, prosperous, just, and democratic world and foster conditions for stability and progress for the benefit of the American people and people everywhere.This mission is shared with the USAID, ensuring we have a common path forward in partnership as we invest in the shared security and prosperity that will ultimately better prepare us for the challenges of tomorrow.',
    website: 'https://www.state.gov/',
    code: "019",
  },
  //   dept of defense info
  {
    value: 'Department of Defense',
    name: 'Department of Defense',
    year: '2020',
    abbr: 'DOD',
    icon: 'DOD.jpg',
    mission: 'The Departments enduring mission is to provide combat-credible military forces needed to deter war and protect the security of our nation.',
    website: 'https://www.defense.gov/',
    code: "097",
  },
  //   dept of energy
  {
    value: 'Department of Energy',
    name: 'Department of Energy',
    year: '2020',
    abbr: 'DOE',
    icon: 'DOE.jpg',
    mission: "The Departments is to ensure America's security and prosperity by addressing its energy, environmental, and nuclear challenges through transformative science and technology solutions.",
    website: 'https://www.defense.gov/',
    code: "089",
  },
  // dept of labor
  {
    value: 'Department of Labor',
    name: 'Department of Labor',
    year: '2020',
    abbr: 'DOL',
    icon: 'DOL.jpg',
    mission: 'To foster, promote, and develop the welfare of the wage earners, job seekers, and retirees of the United States; imporve working conditions; advance opportunities for profitable employment, and assure work-related benefits and rights.',
    website: 'https://www.dol.gov/',
    code: "1601",
  },
  // dept of agriculture
  {
    value: 'Department of Agriculture',
    name: 'Department of Agriculture',
    year: '2020',
    abbr: 'DOA',
    icon: 'DOA.jpg',
    mission: 'Provides leadership on food, agriculture, natural resources, rural development, nutrition, and related issues based on sound public policy, the best available science, and efficient management.',
    website: 'https://www.usda.gov/',
    code: "012",
  },
  // dept of homeland security
  {
    value: 'Department of Homeland Security',
    name: 'Department of Homeland Security',
    year: '2020',
    abbr: 'DOHS',
    icon: 'DOHS.jpg',
    mission: 'The Department has a vital mission: to secure the nation from the many threats we face. This requires the dedication of more than 240,000 employees in jobs that range from aviation and border security to emergency response, from cybersecurity analyst to chemical facility inspector.',
    website: 'https://www.dhs.gov/',
    code: "070",
  },
  // dept of transportation
  {
    value: 'Department of Transportation',
    name: 'Department of Transportation',
    year: '2020',
    abbr: 'DOT',
    icon: 'DOT.jpg',
    mission: 'To ensure America has the safest, most efficient, and modern transportation system in the world, which boosts our economic productivity and global competitiveness and enchances the queality of life in communities both rural and urban.',
    website: 'https://www.transportation.gov/',
    code: "069",
  },
  // dept of commerce
  {
    value: 'Department of Commerce',
    name: 'Department of Commerce',
    year: '2020',
    abbr: 'DOC',
    icon: 'DOC.jpg',
    mission: 'The mission of the Department is to create the conditions for economic growth and opportunity by ensuring fair and reciprocal trade.',
    website: 'https://www.commerce.gov/',
    code: "013",
  },
  // dept of education
  {
    value: 'Department of Education',
    name: 'Department of Education',
    year: '2020',
    abbr: 'DOED',
    icon: 'DOED.jpg',
    mission: "The Education Department's mission is to promote student achievement and prepation for global competitiveness by fostering educational excellence and ensuring equal access.",
    website: 'https://www2.ed.gov/',
    code: "091",
  },
  // *****************break here********************************
  // dept of health and human services
  {
    value: 'Department of Health and Human Services',
    name: 'Department of Health and Human Services',
    year: '2020',
    abbr: 'HHS',
    icon: 'HHS.jpg',
    mission: 'The mission of the U.S. Department of Health and Human Serivces is to enhance the health and well-being of all Americans, by proviging for effective health and human services and by fostering sound, sustained advances in the sciences underlying medicine, public health, and social services.',
    website: 'https://www.hhs.gov/',
    code: "075",
  },
  // dept of housing and urban development
  {
    value: 'Department of Housing and Urban Development',
    name: 'Department of Housing and Urban Development',
    year: '2020',
    abbr: 'HUD',
    icon: 'HUD.jpg',
    mission: 'The mission of the U.S. Department of Housing and Ubran Development is to create strong, sustainable, inclusive communitites and quality affordable homes for all.',
    website: 'https://www.hud.gov/',
    code: "086",
  },
  // dept of justice
  {
    value: 'Department of Justice',
    name: 'Department of Justice',
    year: '2020',
    abbr: 'DOJ',
    icon: 'DOJ.jpg',
    mission: 'To enforce the law and defend the interests of the United States according to the law; to ensure public safety against threats foreign and domestic; to provide federal leadership in preventing and controlling crime; to seek just punishment for those guilty of unlawful behavior; and to ensure fair and impartial administration of justice for all Americans.',
    website: 'https://www.justice.gov/',
    code: "015",
  },
  // dept of the interior
  {
    value: 'Department of the Interior',
    name: 'Department of the Interior',
    year: '2020',
    abbr: 'DOI',
    icon: 'DOI.jpg',
    mission: "The Department of the Interior conserves and manages the Nation's natural resources and cultural heritage for the benefit and enjoyment of the American people, provides scientific and other information about natural resources and natural hazards to address societal challenges and create opportunitites for the American people",
    website: 'https://www.doi.gov/',
    code: "014",
  },
  // dept of the treasury
  {
    value: 'Department of the Treasury',
    name: 'Department of the Treasury',
    year: '2020',
    abbr: 'DODT',
    icon: 'DODT.jpg',
    mission: "The Departments mission is to maintain a strong economy and create economic and job opportunities by promoting the conditions that enable economic growth and stability at home and abroad, strengthen national security by combating threats and protecting the integrity of the financial systems, and manage the U.S. Government's finances and resources effectively.",
    website: 'https://www.treasury.gov/',
    code: "020",
  },
  // environmental protection agency
  {
    value: 'Environmental Protection Agency',
    name: 'Environmental Protection Agency',
    year: '2020',
    abbr: 'EPA',
    icon: 'EPA.jpg',
    mission: 'The mission of the EPA is to protect human health and the environment.',
    website: 'https://www.epa.gov/',
    code: "068",
  },
  // federal communication comission
  {
    value: 'Federal Communication Comission',
    name: 'Federal Communication Comission',
    year: '2020',
    abbr: 'FCC',
    icon: 'FCC.jpg',
    mission: "To ensure that the American people have available, without discrimination on the basis of race, color, religion, national origin, or sex, a rapid, efficient, Nationwide, and worldwide wire and radio communicaiton service with adequate facilites at reasonable charges.",
    website: 'https://www.fcc.gov/',
    code: "027",
  },
  // federal election comission
  {
    value: 'Federal Election Comission',
    name: 'Federal Election Comission',
    year: '2020',
    abbr: 'FEC',
    icon: 'FEC.jpg',
    mission: 'The mission of the Federal Election Comission is to protect the integrity of the campaign finance process by providing transparency and fairly enforcing and administering federal campaign finance laws.',
    website: 'https://www.fec.gov/',
    code: "360",
  },
  // federal trade comission
  {
    value: 'Federal Trade Comission',
    name: 'Federal Trade Comission',
    year: '2020',
    abbr: 'FTC',
    icon: 'FTC.jpg',
    mission: 'To prevent business practices that are anticompetitve or deceptive or unfair to consumers; to enhance informed consumer choice and public understanding of the competitive process; and to accomplish this without unduly burdening legitimate business activity.',
    website: 'https://www.ftc.gov/',
    code: "029",
  },
  // equal employment opportunity comission
  {
    value: 'Equal Employment Opportunity Comission',
    name: 'Equal Employment Opportunity Comission',
    year: '2020',
    abbr: 'EEOC',
    icon: 'EEOC.jpg',
    mission: 'The mission of the EEOC is to prevent and remedy unlawful employment discrimination and to advance equal opportunity for all in the workplace. I call upon everyong to work to ensure that the EEOC sets the best example of equity, diversity, and inclusivenss for all workplaces.',
    website: 'https://www.eeoc.gov/',
    code: "045",
  },
  // social security
  {
    value: 'Social Security Administration',
    name: 'Social Security Administration',
    year: '2020',
    abbr: 'SSA',
    icon: 'SSA.jpg',
    mission: 'Social Security is committed to helping maintain the basic well-being and protection of the people we serve through promoting economic secuirty via compassionate and vigilant leadership.',
    website: 'https://www.ssa.gov/',
    code: "028",
  },
];


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

  // need to update to search through array instead of api call
  getAgencyInfo = (agencyCode, code) => {
    console.log(agencyCode)
    console.log(DeptInfo)
    console.log(DeptInfo.find(el => el.code == agencyCode))
    let deptData = DeptInfo.find(el => el.code == agencyCode);
    console.log(deptData)
    this.updateAgencyContent(deptData);
    return deptData;
    // .then((deptData) => {
    //   this.updateAgencyContent(deptData)
    // })
    // need to update page with setState
    
  }
  
  updateAgencyContent = (deptData => {
    console.log(deptData)
    this.setState({
      name: deptData.name,
      year: deptData.year,
      abbr: deptData.abbr,
      icon: deptData.icon,
      mission: deptData.mission,
      website: deptData.website,
      code: deptData.code
    })
    
  })


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