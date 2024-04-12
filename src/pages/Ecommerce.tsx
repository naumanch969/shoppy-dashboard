import { BsCurrencyDollar } from "react-icons/bs"
import { GoSponsorTiers } from "react-icons/go"
import { Stacked, Pie as PieComponent, Button, SparkLine } from "../components"
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy"
import { useStateContext } from "../contexts/ContextProvider"
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, LineChart, Line, Bar, BarChart, PieChart, Pie, Tooltip, Cell } from "recharts"
import { useState } from "react"

const Ecommerce = () => {

    const { activeMenu, currentColor } = useStateContext()
    const [dataKeyBudgetExpense, setDataKeyBudgetExpense] = useState('budget')

    const budgetExpenseEarning = [
        { name: 'Jan', budget: 11153, expense: 101291, earning: 101291 },
        { name: 'Feb', budget: 12753, expense: 121242, earning: 128242 },
        { name: 'Mar', budget: 14334, expense: 112842, earning: 122841 },
        { name: 'Apr', budget: 15927, expense: 294194, earning: 42194 },
        { name: 'May', budget: 18958, expense: 258192, earning: 22192 },
        { name: 'Jun', budget: 25953, expense: 148129, earning: 12629 },
        { name: 'Jul', budget: 45920, expense: 328223, earning: 128623 },
    ];



    const sales = [
        { name: '2020', value: 298830 },
        { name: '2021', value: 389102 },
        { name: '2022', value: 402291 },
        { name: '2023', value: 502839 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="flex flex-col gap-[1rem] " >

            {/* first section */}
            <div className="lg:h-[9rem] md:h-auto flex lg:flex-row flex-col lg:flex-nowrap justify-cetner lg:gap-0 gap-[1rem]   " >

                {/* first block having background image */}
                <div className="lg:flex-[2] w-full h-full bg-white ddark:text-gray-200 ddark:bg-secondary-dar rounded-xl bg-hero-pattern bg-no-repeat bg-cover bg-center  " >
                    <div className="shadow-box w-full h-full p-[1rem] flex flex-col gap-[4px] " >
                        {/* text */}
                        <div className="flex justify-between items-cetner" >
                            <div>
                                <p className="font-bold text-[20px] text-gray-400" >Earning</p>
                                <p className="text-2xl" >$63,435.44</p>
                            </div>
                        </div>
                        {/* download button */}
                        <div className="flex justify-end items-center " >
                            <Button
                                size="md"
                                color="white"
                                bgColor={currentColor}
                                text="Download"
                                borderRadius="10px" >
                            </Button>
                        </div>
                    </div>
                </div>

                {/* four buttons */}
                <div className="lg:flex-[5] w-full flex flex-wrap justify-center gap-1 items-center" >
                    {
                        earningData.map((item) => (
                            <div key={item.title} className="h-full lg:w-[24%] md:w-[48%] w-[49%] shadow-box p-[1rem] bg-white ddark:text-gray-200 ddark:bg-secondary-dar rounded-[1rem]"  >
                                <button
                                    type="button"
                                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                                    className="text-[40px] opacity-0.9 rounded-full hover:drop-shadow-xl "
                                >
                                    {item.icon}
                                </button>
                                <div className="flex flex-col gap-[8px] " >
                                    <p className="flex gap-[4px] " >
                                        <span className="text-[22px] font-semibold" >{item.amount}</span>
                                        <span className={`text-[14px] text-${item.pcColor} `} >{item.percentage}</span>
                                    </p>
                                    <p className="text-[1rem] text-gray-400" >{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>



            {/* graphs */}
            <div className="flex gap-[1rem] flex-wrap justify-center mb-[1rem] " >
                {/* headings and heading bar */}
                <div className="md:flex-[6] bg-white shadow-box ddark:text-gray-200 ddark:bg-secondary-dar rounded-[1rem] " >
                    <div className="flex flex-col gap-[1rem] w-full p-[1rem] " >
                        {/* heading line of graph */}
                        <div className="flex justify-between " >
                            <p className="font-semibold text-xl" > Revenue Updates</p>
                            <div className="flex items-center gap-4  " >
                                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl" >
                                    <span><GoSponsorTiers /></span>
                                    <span>Expense</span>
                                </p>
                                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl" >
                                    <span><GoSponsorTiers /></span>
                                    <span>Budget</span>
                                </p>
                            </div>
                        </div>

                        {/* charts */}
                        <div className="flex flex-wrap justify-center md:flex-row flex-col w-full " >

                            <div className="md:flex-[1] md:w-max w-full md:max-w-[48%] flex flex-col gap-[1rem] pr-[1rem] border-r-[0.5px] border-gray-400  " >
                                <div className="flex flex-col " >
                                    {/* budget - small block */}
                                    <div>
                                        <p className="flex justify-start gap-[4px] " >
                                            <span className="text-[28px] font-semibold " >$93,483</span>
                                            <span className="px-[8px] py-[2px] hover:drop-shadow-xl rounded-[1rem] h-fit cursor-pointer text-white bg-green-400 " >23%</span>
                                        </p>
                                        <p className="text-gray-500">Budget</p>
                                    </div>
                                    {/* expense - small block */}
                                    <div className="" >
                                        <p>
                                            <span className="text-[28px] font-semibold " >$48,83</span>
                                        </p>
                                        <p className="text-gray-500 ">Expense</p>
                                    </div>
                                </div>
                                {/* sparkline chart */}
                                <div className="h-[8rem] w-full "  >
                                    <ResponsiveContainer>
                                        <LineChart width={300} height={100} data={budgetExpenseEarning}>
                                            <Line type="monotone" dataKey={dataKeyBudgetExpense} stroke="#8884d8" strokeWidth={2} />
                                            <Tooltip />
                                        </LineChart>
                                    </ResponsiveContainer >
                                </div>
                                {/* download report button */}
                                <div className="" >
                                    <Button
                                        color="white"
                                        bgColor={currentColor}
                                        text="Download Report"
                                        borderRadius="10px"
                                    />
                                </div>
                            </div>

                            {/* stacked chart */}
                            <div className="md:flex-[1] md:w-max w-full md:max-w-[48%] pl-[1rem] border-l-[0.5px] border-gray-400 " >
                                <div className="h-[20rem] w-full " >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart width={250} height={250} data={budgetExpenseEarning}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            {/* <YAxis /> */}
                                            <Tooltip />
                                            <Legend />
                                            {<Bar dataKey="budget" stackId="a" fill="#8884d8" />}
                                            <Bar dataKey="expense" stackId="a" fill="#82ca9d" />
                                            {/* <Bar dataKey="uv" fill="#ffc658" /> */}
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





                {/* right section */}
                <div className="md:flex-[3] bg-inherit rounded-[1px] w-full " >
                    <div className="w-full h-full flex flex-col justify-between items-center gap-[12px] " >

                        <div className="shadow-box h-[50%] flex flex-col gap-[1rem] w-full bg-cyan-700 rounded-[1rem] " >
                            <div className="w-full h-full flex flex-col justify-between p-[12px] " >
                                <div className="w-full flex justify-between items-center text-white  " >
                                    <h3 className="font-semibold text-[1.1rem] " >Earning</h3>
                                    <div className="flex flex-col " >
                                        <span>$56325.56</span>
                                        <span>Monthly Revenue</span>
                                    </div>
                                </div>
                                <div className="h-[6rem] w-full " >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart width={150} height={40} data={budgetExpenseEarning}>
                                            <XAxis dataKey='name' />
                                            <Bar dataKey="earning" fill="#8884d8" />
                                            <Tooltip />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div className="md:h-[50%] h-[17rem] shadow-box flex w-full bg-white rounded-[1rem] " >
                            <div className="w-full p-[12px] flex md:flex-row flex-col lg;justify-between md:justify-center items-center ">
                                <div className="flex lg:flex-col flex-row lg:gap-0 gap-[4px] text-gray-700 text-[22px] font-semibold " >
                                    <span>Yearly</span>
                                    <span>Sales</span>
                                </div>
                                <div className="h-full w-[12rem] ">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart width={200} height={200}
                                        // onMouseEnter={this.onPieEnter}
                                        >
                                            <Pie data={sales} innerRadius={30} outerRadius={80} fill="#8884d8" paddingAngle={10} dataKey="value">
                                                {sales.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Ecommerce
