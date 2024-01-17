import { Job } from '~types';

const JOB_START_TIMESTAMP = 1404172800;

export const JOB_TOTAL_EXPERIENCE = (
  (Date.now() / 1000 - JOB_START_TIMESTAMP) / 31536000
).toFixed(1);

export const JOB_HISTORY: Job[] = [
  {
    organization: 'Alfa-Bank',
    period: '09.2021 - NOW',
    position: 'Senior Front-End Developer',
    description: 'Development of personal online banking account and employee dashboards',
  },
  {
    organization: 'KRDS',
    period: '01.2019 - 08.2021',
    position: 'Full-Stack Developer, Teamlead',
    description: 'Development of ERP and CRM for microfinance organizations',
  },
  {
    organization: 'Insist',
    period: '10.2017 - 12.2018',
    position: 'Full-Stack Developer',
    description: 'Development of application for real-time monitoring data from oil-producing points',
  },
  {
    organization: 'Freelance',
    period: '07.2014 - 09.2017',
    position: 'Full-Stack Developer, Web-Designer',
    description: 'Development of turnkey websites and drawing layouts, logos and corporate identity',
  },
];
