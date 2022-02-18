const DOA = '/deptImgs/usda.svg';
const DOD = '/deptImgs/defense.png';
const DOE = '/deptImgs/energy.png';
const DOED = '/deptImgs/education.png';
const DOHHS = '/deptImgs/health.png';
const DOI = '/deptImgs/interior.png';
const DOL = '/deptImgs/labor.png';
const DOS = '/deptImgs/state.png';
const DOT = '/deptImgs/transportation.png';
const DO$ = '/deptImgs/treasury.png';
const EPA = '/deptImgs/epa.png';
const FEC = '/deptImgs/fec.png';
const FTC = '/deptImgs/ftc.png';
const FCC = '/deptImgs/fcc.png';
const HUD = '/deptImgs/hud.png';
const SSA = '/deptImgs/socialSecurity.png';
const DOJ = '/deptImgs/justice.png';
const NASA = '/deptImgs/nasa.png';
const VA = '/deptImgs/veterans.png';
const EEOC = '/deptImgs/equalEmployment.png';
const DOHS = '/deptImgs/homelandSecurity.png';

export const DeptInfo = [
  // dept of state info
  {
    value: 'Department of State',
    name: 'Department of State',
    year: '2020',
    abbr: 'DOS',
    icon: DOS,
    mission: 'To shape and sustain a peaceful, prosperous, just, and democratic world and foster conditions for stability and progress for the benefit of the American people and people everywhere.This mission is shared with the USAID, ensuring we have a common path forward in partnership as we invest in the shared security and prosperity that will ultimately better prepare us for the challenges of tomorrow.',
    website: 'https://www.state.gov/',
    code: "019",
  },
  {
    value: 'National Aeronautics and Space Administration',
    name: 'National Aeronautics and Space Administration',
    year: '2020',
    abbr: 'NASA',
    icon: NASA,
    mission: "Lead an innovative and sustainable program of exploration with commercial and international partners to enable human expansion across the solar system and bring new knowledge and opportunities back to Earth. Support growth of the nation's economy in space and aeronautics, increase understanding of the universe and our place in it, work with industry to improve America's aerospace technologies and advance American leadership.",
    website: 'https://www.nasa.gov/',
    code: '9121'

  },
  {
    value: 'Department of Veterans Affairs',
    name: 'Department of Veterans Affairs',
    year: '2020',
    abbr: 'VA',
    icon: VA,
    mission: "To fulfill President Lincoln's promise “To care for him who shall have borne the battle, and for his widow, and his orphan” by serving and honoring the men and women who are America's veterans.",
    website: 'https://www.va.gov/',
    code: '9121'
  },
  //   dept of defense info
  {
    value: 'Department of Defense',
    name: 'Department of Defense',
    year: '2020',
    abbr: 'DOD',
    icon: DOD,
    mission: 'To provide combat-credible military forces needed to deter war and protect the security of our nation.',
    website: 'https://www.defense.gov/',
    code: "097",
  },
  //   dept of energy
  {
    value: 'Department of Energy',
    name: 'Department of Energy',
    year: '2020',
    abbr: 'DOE',
    icon: DOE,
    mission: "To ensure America's security and prosperity by addressing it's energy, environmental, and nuclear challenges through transformative science and technology based solutions.",
    website: 'https://www.defense.gov/',
    code: "089",
  },
  // dept of labor
  {
    value: 'Department of Labor',
    name: 'Department of Labor',
    year: '2020',
    abbr: 'DOL',
    icon: DOL,
    mission: 'To foster, promote, and develop the welfare of the wage earners, job seekers, and retirees of the United States; improve working conditions; advance opportunities for profitable employment, and assure work-related benefits and rights.',
    website: 'https://www.dol.gov/',
    code: "1601",
  },
  // dept of agriculture
  {
    value: 'Department of Agriculture',
    name: 'Department of Agriculture',
    year: '2020',
    abbr: 'DOA',
    icon: DOA,
    mission: 'Provide leadership on food, agriculture, natural resources, rural development, nutrition, and related issues based on sound public policy, the best available science, and efficient management.',
    website: 'https://www.usda.gov/',
    code: "012",
  },
  // dept of homeland security
  {
    value: 'Department of Homeland Security',
    name: 'Department of Homeland Security',
    year: '2020',
    abbr: 'DOHS',
    icon: DOHS,
    mission: 'To secure the nation from the many threats we face. This requires the dedication of more than 240,000 employees in jobs that range from aviation and border security to emergency response, from cybersecurity analyst to chemical facility inspectors.',
    website: 'https://www.dhs.gov/',
    code: "070",
  },
  // dept of transportation
  {
    value: 'Department of Transportation',
    name: 'Department of Transportation',
    year: '2020',
    abbr: 'DOT',
    icon: DOT,
    mission: 'To ensure America has the safest, most efficient, and modern transportation system in the world, which boosts our economic productivity and global competitiveness and enchances the queality of life in communities both rural and urban.',
    website: 'https://www.transportation.gov/',
    code: "069",
  },
  // dept of education
  {
    value: 'Department of Education',
    name: 'Department of Education',
    year: '2020',
    abbr: 'DOED',
    icon: DOED,
    mission: "To promote student achievement and prepation for global competitiveness by fostering educational excellence and ensuring equal access to educational resources.",
    website: 'https://www2.ed.gov/',
    code: "091",
  },
  // dept of health and human services
  {
    value: 'Department of Health and Human Services',
    name: 'Department of Health and Human Services',
    year: '2020',
    abbr: 'HHS',
    icon: DOHHS,
    mission: 'To enhance the health and well-being of all Americans, by providing effective health and human services and fostering sound, sustained advances in the sciences underlying medicine, public health, and social services.',
    website: 'https://www.hhs.gov/',
    code: "075",
  },
  // dept of housing and urban development
  {
    value: 'Department of Housing and Urban Development',
    name: 'Department of Housing and Urban Development',
    year: '2020',
    abbr: 'HUD',
    icon: HUD,
    mission: 'To create strong, sustainable, inclusive communitites and quality affordable homes for all.',
    website: 'https://www.hud.gov/',
    code: "086",
  },
  // dept of justice
  {
    value: 'Department of Justice',
    name: 'Department of Justice',
    year: '2020',
    abbr: 'DOJ',
    icon: DOJ,
    mission: 'To enforce the law and defend the interests of the United States according to the law; to ensure public safety against threats both foreign and domestic; to provide federal leadership in preventing and controlling crime; to seek just punishment for those guilty of unlawful behavior; and to ensure fair and impartial administration of justice for all Americans.',
    website: 'https://www.justice.gov/',
    code: "015",
  },
  // dept of the interior
  {
      value: 'Department of the Interior',
      name: 'Department of the Interior',
      year: '2020',
      abbr: 'DOI',
  icon: DOI,
      mission: "Conserve and manage the Nation's natural resources and cultural heritage for the benefit and enjoyment of the American people, provides scientific and other information about natural resources and natural hazards to address societal challenges and create opportunitites for the American people",
      website: 'https://www.doi.gov/',
      code: "014",
    },
  // dept of the treasury
  {
    value: 'Department of the Treasury',
    name: 'Department of the Treasury',
    year: '2020',
    abbr: 'DODT',
    icon: DO$,
    mission: "Maintain a strong economy and create economic and job opportunities by promoting the conditions that enable economic growth and stability at home and abroad, strengthen national security by combating threats and protecting the integrity of the financial systems, and manage the U.S. Government's finances and resources effectively.",
    website: 'https://www.treasury.gov/',
    code: "020",
  },
  // environmental protection agency
  {
    value: 'Environmental Protection Agency',
    name: 'Environmental Protection Agency',
    year: '2020',
    abbr: 'EPA',
    icon: EPA,
    mission: 'To protect human health and the environment. Ensure that all Americans have clean air, land, and water. Create Nationwide efforts to reduce encironmental risks based on the best available scientific information. Clean up contaminated lands and toxic sites and review chemicals in the marketplace for safety.',
    website: 'https://www.epa.gov/',
    code: "068",
  },
  // federal communication comission
  {
    value: 'Federal Communication Comission',
    name: 'Federal Communication Comission',
    year: '2020',
    abbr: 'FCC',
    icon: FCC,
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
    icon: FEC,
    mission: 'To protect the integrity of the campaign finance process by providing transparent and fairly enforced federal campaign finance laws. The FEC reflects a belief that democracy works best when voters can make informed decisions in the political process.',
    website: 'https://www.fec.gov/',
    code: "360",
  },
  // federal trade comission
  {
    value: 'Federal Trade Comission',
    name: 'Federal Trade Comission',
    year: '2020',
    abbr: 'FTC',
    icon: FTC,
    mission: 'To prevent business practices that are anticompetitve, deceptive, or unfair to consumers; to enhance informed consumer choice and public understanding of the competitive process; and to accomplish this without unduly burdening legitimate business activity.',
    website: 'https://www.ftc.gov/',
    code: "029",
  },
  // equal employment opportunity comission
  {
    value: 'Equal Employment Opportunity Comission',
    name: 'Equal Employment Opportunity Comission',
    year: '2020',
    abbr: 'EEOC',
    icon: EEOC,
    mission: 'To stop and remedy unlawful employment discrimination in the workplace by enforcing Federal laws that prohibit employment discrimination. We do this primarily through investigation, conciliation, mediation, and litigation, or otherwise resolving charges of discrimination against private sector employers, employment agencies, labor unions, and the Federal Government. We also investigate charges of discrimination against State and local governments and provide recommendations to the Department of Justice for further action. ',
    website: 'https://www.eeoc.gov/',
    code: "045",
  },
  // social security
  {
    value: 'Social Security Administration',
    name: 'Social Security Administration',
    year: '2020',
    abbr: 'SSA',
    icon: SSA,
    mission: "Committed to helping maintain the basic well-being and protection of the people we serve. We pay benefits to about 64 million people including retirees, children, widows, and widowers. From birth, to marriage, and into retirement, we are there to provide support throughout life's journey",
    website: 'https://www.ssa.gov/',
    code: "028",
  },
]