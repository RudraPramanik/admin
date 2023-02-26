const jsonfile = require('jsonfile');

const moment = require('moment');
const simpleGit = require('simple-git');

const random = require('random');
const FILE_PATH = './data.json';

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(1, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format();
  const data = {
    date: DATE,
  };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n))
      .push();
  });
};

makeCommit(12);







// {
//   "name": "react-admin",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@emotion/react": "^11.10.4",
//     "@emotion/styled": "^11.10.4",
//     "@fullcalendar/core": "^5.11.3",
//     "@fullcalendar/daygrid": "^5.11.3",
//     "@fullcalendar/interaction": "^5.11.3",
//     "@fullcalendar/list": "^5.11.3",
//     "@fullcalendar/react": "^5.11.2",
//     "@fullcalendar/timegrid": "^5.11.3",
//     "@mui/icons-material": "^5.10.3",
//     "@mui/material": "^5.10.5",
//     "@mui/x-data-grid": "^5.17.2",
//     "@nivo/bar": "^0.80.0",
//     "@nivo/core": "^0.79.0",
//     "@nivo/geo": "^0.80.0",
//     "@nivo/line": "^0.79.1",
//     "@nivo/pie": "^0.80.0",
//     "@reduxjs/toolkit": "^1.8.5",
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.3.0",
//     "@testing-library/user-event": "^13.5.0",
//     "chart.js": "^3.9.1",
//     "formik": "^2.2.9",
//     "react": "^18.2.0",
//     "react-chartjs-2": "^4.3.1",
//     "react-dom": "^18.2.0",
//     "react-pro-sidebar": "^0.7.1",
//     "react-redux": "^8.0.2",
//     "react-router-dom": "^6.3.0",
//     "react-scripts": "5.0.1",
//     "web-vitals": "^2.1.4",
//     "yup": "^0.32.11"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }