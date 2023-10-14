import { lazy } from 'react';
import './dashboard.scss';
import RevenueCard from '../../components/cards/revenueCard/RevenueCard';
const CustomCard = lazy(() => import('../../components/cards/CustomCard'));

const Dashboard = () => {
  interface Data {
    name: string;

    amt: number;
  }
  const data: Data[] = [
    {
      name: 'Page A',
      amt: 2400,
    },
    {
      name: 'Page B',
      amt: 2210,
    },
    {
      name: 'Page C',
      amt: 2290,
    },
    {
      name: 'Page D',
      amt: 2000,
    },
    {
      name: 'Page E',
      amt: 2181,
    },
    {
      name: 'Page F',
      amt: 2500,
    },
    {
      name: 'Page G',
      amt: 2100,
    },
  ];
  return (
    <div className="dashboard-container">
      <div className="card-container">
        <CustomCard title={'Daily Sales'} data={data} />
        <CustomCard title={'Weekly sales'} data={data} />
        <CustomCard title={'Monthly Sales'} data={data} />
      </div>

      <div className="revenue-container">
        <RevenueCard />
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
        <h1>thwhw</h1>
      </div>
    </div>
  );
};

export default Dashboard;
