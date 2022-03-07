// will need to use state to import and export variables here
export default function DeptSwitch(dept: string){
    let deptNames = [];
    switch (dept) {
        case 'Department of Housing and Urban Development':
            deptNames.push('HUD')
            break;
        case 'Department of Treasury':
            deptNames.push('USDT')
            break;
        case 'Federal Communication Comission':
            deptNames.push('FCC')
            break;
        case 'Federal Election Comission':
            deptNames.push('FEC')
            break;
        case 'Department of Health and Human Services':
            deptNames.push('DHHS')
            break;
        case 'Department of Education':
            deptNames.push('DoEd')
            break;
        case 'Department of Transportation':
            deptNames.push('DOT')
            break;
        case 'Department of State':
            deptNames.push('DOS')
            break;
        case 'Department of Veterans Affairs':
            deptNames.push('VA')
            break;
        case 'Equal Opportunity Employment Commission':
            deptNames.push('EEOC')
            break;
        case 'Department of Energy':
            deptNames.push('DOE')
            break;
        case 'Social Security Administration':
            deptNames.push('SSA')
            break;
        case 'Department of Defense':
            deptNames.push('DOD')
            break;
        case 'Department of Homeland Security':
            deptNames.push('DHS')
            break;
        case 'National Aeronautics and Space Administration':
            deptNames.push('NASA')
            break;
        case 'Department of Justice':
            deptNames.push('DOJ')
            break;
        case 'Department of the Interior':
            deptNames.push('DOI')
            break;
        case 'Department of Labor':
            deptNames.push('DOL')
            break;
        case 'Environmental Protection Agency':
            deptNames.push('EPA')
            break;
        case 'Department of Agriculture':
            deptNames.push('DOA')
            break;
        case 'Federal Trade Comission':
            deptNames.push('FTC')
            break;
    }
    return deptNames
}