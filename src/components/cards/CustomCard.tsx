import './customeCard.scss';
import { LineChart, Line, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

import { RiMoreLine } from 'react-icons/ri';

const CustomCard = ({ title, data }) => {
  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <text x={x} y={y} dy={16} textAnchor="end" fill="#666" fontSize={10}>
        {payload.value}
      </text>
    );
  };
  // console.log(data)
  return (
    <div className="card-wrapper">
      <div className="card-title">
        <h1>{title}</h1>
        <RiMoreLine size={25} />
      </div>
      <div className="card-content">
        <h3>360</h3>
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <YAxis tick={<CustomizedAxisTick />} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amt"
                stroke="#8884d8"
                strokeWidth={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
