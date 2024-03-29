# The People's Purse
## The project is live and free to use at [People's Purse](https://peoplespurse.org). 
![Alt text](./assets/peoplesPurseScreenShot.png?raw=true "Peoples Purse Landing Page")
#### A full stack application utilizing the MGNT stack (MongoDb, GraphQL, Node, Next.js/TypeScript). 

## Project Description
The People's Purse is an educational and social change platform that aims to inform citizens about different governmental departments and the elected officials who represent them. The inspiration from the project stems from the idea of Participatory Budgeting, or PB, a concept that was invented in Brazil in 1989, and singled out as a best practice by both the World Bank and United Nations. PB comprises of three steps:
1.	Citizens are encouraged to identify community needs for funding
2.	Citizens then work with elected officials to craft budgetary proposals to meet these needs
3.	Citizens are then able to vote on where and how public funds are spent

### Features include: 
- A general educational component about the government's different departments with links to foster independent research
- Location specific information regarding elected officials based off user input
- The chance for users to craft a mock federal budget via budget percentage points
- Action recording functionality for learners to record civic actions, or volunteer opportunities taken in their communities
- Class creation capabilities for educators
- Class overview and detail pages where educators can view total class votes and actions taken in the community
- A budget overview page where users can view the aggregate of all votes across the application 

## Technologies Used
1. [Apollo GraphQL](https://www.apollographql.com/) 
    - Application Program Interface 'API' routing
2. [Next.js](https://nextjs.org/) 
    - Lighweight Frontend Routing and Framework
    - Server Side Generation or Data and Static HTML generated at build time
3. [TypeScript](https://www.typescriptlang.org/) 
    - Typesafe Functional JavaScript
4. [Chart.js](https://www.chartjs.org/) 
    - Visualization of Budget Results
5. [Material-UI](https://mui.com/material-ui/) 
    - General CSS Functionality and Styling
6. [Custom CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 
    - Mobile Responsive Capabilities
7. [ReactChart.js](https://react-chartjs-2.js.org/) 
    - React Based Components for Chart.js

## Project Notes
This project is currently hosted on a Vercel platform with a google domain redirect. Functionality is being adding based on educator and user feedback, so any and all recommendations are not only encouraged, but welcome. The People's Purse can be run either locally or visited at [People's Purse](https://peoplespurse.org)

## Installation and Setup Instructions
In order to clone this repository you'll need `node` installed on your machine. Once you've cloned the repository you can run the following commands for usage:

1. Installation:
    `npm install` or `yarn`

2. To Start the Application in Development Mode:
    `npm run dev` or `yarn dev`  

3. To Visit the Application:
    `http://localhost:3000/`

4. To Build the Application:
    `npm run build` or `yarn build`

5. To Start the Optimized Build:
    `npm run start` or `yarn start`

## License
Copyright [2021] [Samuel Thompson]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
