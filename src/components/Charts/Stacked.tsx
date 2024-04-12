import { ResponsiveContainer, BarChart, Tooltip, XAxis, YAxis, Bar, CartesianGrid, Legend } from 'recharts'

const Stacked = ({ width, height }) => {

    const stackedData = [
        { name: 'Jan', budget: 411153, expenses: 101291 },
        { name: 'Feb', budget: 112753, expenses: 121242 },
        { name: 'Mar', budget: 414334, expenses: 112842 },
        { name: 'Apr', budget: 215927, expenses: 294194 },
        { name: 'May', budget: 118958, expenses: 258192 },
        { name: 'Jun', budget: 225953, expenses: 148129 },
        { name: 'Jul', budget: 245920, expenses: 328223 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={'250px'}
                height={250}
                data={stackedData}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" stackId="a" fill="#8884d8" />
                <Bar dataKey="expenses" stackId="a" fill="#82ca9d" />
                {/* <Bar dataKey="uv" fill="#ffc658" /> */}
            </BarChart>
        </ResponsiveContainer>
    )

}

export default Stacked;