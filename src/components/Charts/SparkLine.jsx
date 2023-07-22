import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'


const SparkLine = () => {
    const sparklineData = [
        { name: 'Jan', budget: 411153, expenses: 101291 },
        { name: 'Feb', budget: 112753, expenses: 121242 },
        { name: 'Mar', budget: 414334, expenses: 112842 },
        { name: 'Apr', budget: 215927, expenses: 294194 },
        { name: 'May', budget: 118958, expenses: 258192 },
        { name: 'Jun', budget: 225953, expenses: 148129 },
        { name: 'Jul', budget: 245920, expenses: 328223 },
    ];


    return (
        <ResponsiveContainer>
            <LineChart width={300} height={100} data={stackedData}>
                <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer >
    )

}

export default SparkLine;