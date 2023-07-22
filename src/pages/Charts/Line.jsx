import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const LineComponent = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
  ];

  const budgetExpenseEarning = [
    { name: 'Jan', budget: 110153, expense: 201291, earning: 301291 },
    { name: 'Feb', budget: 120753, expense: 121242, earning: 128242 },
    { name: 'Mar', budget: 140334, expense: 112842, earning: 122841 },
    { name: 'Apr', budget: 150927, expense: 294194, earning: 421942 },
    { name: 'May', budget: 180958, expense: 258192, earning: 221922 },
    { name: 'Jun', budget: 250953, expense: 148129, earning: 126292 },
    { name: 'Jul', budget: 450920, expense: 328002, earning: 128623 },
    { name: 'Aug', budget: 460330, expense: 325250, earning: 228623 },
    { name: 'Sep', budget: 250420, expense: 120323, earning: 135603 },
    { name: 'Oct', budget: 853920, expense: 320423, earning: 123002 },
    { name: 'Nov', budget: 350920, expense: 224523, earning: 338200 },
    { name: 'Dec', budget: 700920, expense: 622423, earning: 623221 },
  ];

  const CustomizedLabel = ({ x, y, stroke, value }) => {
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }

  const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }


  return (
    <div className='w-full h-full flex flex-col items-start gap-[1rem] pb-[2rem] ' >

      <div>
        <h1 className='text-[32px] font-bold ' >Line Chart</h1>
      </div>


      <div className='w-full h-full ' >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={budgetExpenseEarning} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="budget" stroke="#8884d8" label={<CustomizedLabel />} />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
            <Line type="monotone" dataKey="earning" stroke="#42cd3d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default LineComponent