"use strict";
const evenVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 5 },
            { "name": "Department of Defense", "code": 2, "percent": 5 },
            { "name": "Department of Energy", "code": 3, "percent": 5 },
            { "name": "Department of Education", "code": 4, "percent": 5 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 5 },
            { "name": "Department of the Interior", "code": 6, "percent": 5 },
            { "name": "Department of Labor", "code": 7, "percent": 5 },
            { "name": "Department of State", "code": 8, "percent": 5 },
            { "name": "Department of Transportation", "code": 9, "percent": 5 },
            { "name": "Department of Treasury", "code": 10, "percent": 5 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 5 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 5 },
            { "name": "Federal Election Comission", "code": 13, "percent": 5 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 5 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 5 },
            { "name": "Social Security Administration", "code": 16, "percent": 5 },
            { "name": "Department of Justice", "code": 17, "percent": 5 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 5 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 5 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 5 },
        ],
        "class_code": null
    }
];
const defenseVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 1 },
            { "name": "Department of Defense", "code": 2, "percent": 20 },
            { "name": "Department of Energy", "code": 3, "percent": 1 },
            { "name": "Department of Education", "code": 4, "percent": 1 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 5 },
            { "name": "Department of the Interior", "code": 6, "percent": 1 },
            { "name": "Department of Labor", "code": 7, "percent": 1 },
            { "name": "Department of State", "code": 8, "percent": 10 },
            { "name": "Department of Transportation", "code": 9, "percent": 1 },
            { "name": "Department of Treasury", "code": 10, "percent": 1 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 1 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 1 },
            { "name": "Federal Election Comission", "code": 13, "percent": 1 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 1 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 1 },
            { "name": "Social Security Administration", "code": 16, "percent": 10 },
            { "name": "Department of Justice", "code": 17, "percent": 5 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 10 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 20 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 5 },
        ],
        "class_code": null
    }
];
const healthVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 1 },
            { "name": "Department of Defense", "code": 2, "percent": 1 },
            { "name": "Department of Energy", "code": 3, "percent": 1 },
            { "name": "Department of Education", "code": 4, "percent": 7 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 20 },
            { "name": "Department of the Interior", "code": 6, "percent": 1 },
            { "name": "Department of Labor", "code": 7, "percent": 10 },
            { "name": "Department of State", "code": 8, "percent": 10 },
            { "name": "Department of Transportation", "code": 9, "percent": 1 },
            { "name": "Department of Treasury", "code": 10, "percent": 1 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 1 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 1 },
            { "name": "Federal Election Comission", "code": 13, "percent": 1 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 1 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 10 },
            { "name": "Social Security Administration", "code": 16, "percent": 16 },
            { "name": "Department of Justice", "code": 17, "percent": 1 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 1 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 10 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 5 },
        ],
        "class_code": null
    }
];
const enviroVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 10 },
            { "name": "Department of Defense", "code": 2, "percent": 1 },
            { "name": "Department of Energy", "code": 3, "percent": 10 },
            { "name": "Department of Education", "code": 4, "percent": 1 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 5 },
            { "name": "Department of the Interior", "code": 6, "percent": 5 },
            { "name": "Department of Labor", "code": 7, "percent": 10 },
            { "name": "Department of State", "code": 8, "percent": 10 },
            { "name": "Department of Transportation", "code": 9, "percent": 10 },
            { "name": "Department of Treasury", "code": 10, "percent": 1 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 20 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 1 },
            { "name": "Federal Election Comission", "code": 13, "percent": 1 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 1 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 1 },
            { "name": "Social Security Administration", "code": 16, "percent": 1 },
            { "name": "Department of Justice", "code": 17, "percent": 1 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 5 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 1 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 5 },
        ],
        "class_code": null
    }
];
const educationVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 1 },
            { "name": "Department of Defense", "code": 2, "percent": 1 },
            { "name": "Department of Energy", "code": 3, "percent": 1 },
            { "name": "Department of Education", "code": 4, "percent": 21 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 10 },
            { "name": "Department of the Interior", "code": 6, "percent": 1 },
            { "name": "Department of Labor", "code": 7, "percent": 10 },
            { "name": "Department of State", "code": 8, "percent": 1 },
            { "name": "Department of Transportation", "code": 9, "percent": 10 },
            { "name": "Department of Treasury", "code": 10, "percent": 1 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 1 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 1 },
            { "name": "Federal Election Comission", "code": 13, "percent": 1 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 1 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 10 },
            { "name": "Social Security Administration", "code": 16, "percent": 5 },
            { "name": "Department of Justice", "code": 17, "percent": 1 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 10 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 1 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 8 },
        ],
        "class_code": null
    }
];
const developVoteInput = [
    {
        "budget": [
            { "name": "Department of Agriculture", "code": 1, "percent": 5 },
            { "name": "Department of Defense", "code": 2, "percent": 5 },
            { "name": "Department of Energy", "code": 3, "percent": 10 },
            { "name": "Department of Education", "code": 4, "percent": 5 },
            { "name": "Department of Health and Human Services", "code": 5, "percent": 5 },
            { "name": "Department of the Interior", "code": 6, "percent": 10 },
            { "name": "Department of Labor", "code": 7, "percent": 5 },
            { "name": "Department of State", "code": 8, "percent": 5 },
            { "name": "Department of Transportation", "code": 9, "percent": 5 },
            { "name": "Department of Treasury", "code": 10, "percent": 5 },
            { "name": "Environmental Protection Agency", "code": 11, "percent": 10 },
            { "name": "Federal Communication Comission", "code": 12, "percent": 1 },
            { "name": "Federal Election Comission", "code": 13, "percent": 1 },
            { "name": "Federal Trade Comission", "code": 14, "percent": 5 },
            { "name": "Department of Housing and Urban Development", "code": 15, "percent": 10 },
            { "name": "Social Security Administration", "code": 16, "percent": 5 },
            { "name": "Department of Justice", "code": 17, "percent": 1 },
            { "name": "National Aeronatuics and Space Administration", "code": 18, "percent": 1 },
            { "name": "Department of Veterans Affairs", "code": 19, "percent": 1 },
            { "name": "Equal Opportunity Employment Comission", "code": 20, "percent": 5 },
        ],
        "class_code": null
    }
];
