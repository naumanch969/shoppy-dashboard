import { RadialBarChart, RadialBar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const budgetExpenseEarning = [
    { name: 'Jan', budget: 110153, expense: 201291, earning: 301291, fill: '#8884d8' },
    { name: 'Feb', budget: 120753, expense: 121242, earning: 128242, fill: '#83a6ed' },
    { name: 'Mar', budget: 140334, expense: 112842, earning: 122841, fill: '#8dd1e1' },
    { name: 'Apr', budget: 150927, expense: 294194, earning: 421942, fill: '#82ca9d' },
    { name: 'May', budget: 180958, expense: 258192, earning: 221922, fill: '#a4de6c' },
    { name: 'Jun', budget: 250953, expense: 148129, earning: 126292, fill: '#d0ed57' },
    { name: 'Jul', budget: 450920, expense: 328002, earning: 128623, fill: '#ffc658' },
    { name: 'Aug', budget: 460330, expense: 325250, earning: 228623, fill: '#8884d8' },
    { name: 'Sep', budget: 250420, expense: 120323, earning: 135603, fill: '#83a6ed' },
    { name: 'Oct', budget: 853920, expense: 320423, earning: 123002, fill: '#8dd1e1' },
    { name: 'Nov', budget: 350920, expense: 224523, earning: 338200, fill: '#82ca9d' },
    { name: 'Dec', budget: 700920, expense: 622423, earning: 623221, fill: '#a4de6c' },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const PyramidComponent = () => {

    return (
        <div className='w-full h-full flex flex-col items-start gap-[1rem] pb-[2rem] ' >

            <div>
                <h1 className='text-[32px] font-bold ' >PYramid Chart</h1>
            </div>


            <div className='w-full h-full ' >
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart innerRadius="20%" outerRadius="90%" barSize={50} data={budgetExpenseEarning}>
                        <RadialBar dataKey="budget" minAngle={10} label={{ position: 'insideStart', fill: '#000' }} background clockWise  />
                        {/* <RadialBar dataKey="expense" minAngle={10} label={{ position: 'insideStart', fill: '#000' }} background clockWise  /> */}
                        {/* <RadialBar dataKey="earning" minAngle={10} label={{ position: 'insideStart', fill: '#000' }} background clockWise  /> */}
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        <Tooltip />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default PyramidComponent