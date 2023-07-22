import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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


const AreaComponent = () => {

  return (
    <div className='w-full h-full flex flex-col items-start gap-[1rem] pb-[2rem] ' >

      <div>
        <h1 className='text-[32px] font-bold ' >Area Chart</h1>
      </div>


      <div className='w-full h-full ' >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={budgetExpenseEarning}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="budget" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="expense" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="earning" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}


export default AreaComponent