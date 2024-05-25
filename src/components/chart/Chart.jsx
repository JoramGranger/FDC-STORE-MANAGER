import './chart.scss'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name: "January", Total: 12000 }, 
    {name: "February", Total: 45000 }, 
    {name: "March", Total: 37000 }, 
    {name: "April", Total: 68900 }, 
    {name: "May", Total: 12900 }, 
    {name: "June", Total: 36800 }, 
    {name: "July", Total: 49000 }, 
    {name: "August", Total: 29700 }, 
    {name: "September", Total: 8700 }, 
    {name: "October", Total: 26500 }, 
    {name: "November", Total: 11100 }, 
    {name: "December", Total: 17400 }, 
  ];

const Chart = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={2/1}>
                <AreaChart width={730} height={250} data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke='grey'/>
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                  <Tooltip />
                  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                  </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart