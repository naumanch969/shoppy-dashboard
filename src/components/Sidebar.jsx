import { Link, NavLink } from "react-router-dom"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { useStateContext } from "../contexts/ContextProvider"
import { Tooltip } from "@mui/material"
import { FiEdit, FiPieChart, FiShoppingBag } from "react-icons/fi"
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineStock } from "react-icons/ai"
import { IoMdContacts } from "react-icons/io"
import { RiContactsLine, RiStockLine } from "react-icons/ri"
import { BsBarChart, BsKanban } from "react-icons/bs"
import { BiColorFill } from "react-icons/bi"
import { GiLouvrePyramid } from "react-icons/gi"

const Sidebar = () => {

    const { setActiveMenu, activeMenu, screenSize, currentColor } = useStateContext()
 

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
    const links = [
        {
            title: 'Dashboard',
            links: [
                { name: 'ecommerce', icon: <FiShoppingBag /> },
            ],
        },
        {
            title: 'Pages',
            links: [
                { name: 'orders', icon: <AiOutlineShoppingCart /> },
                { name: 'employees', icon: <IoMdContacts /> },
                { name: 'customers', icon: <RiContactsLine /> },
            ],
        },
        {
            title: 'Apps',
            links: [
                { name: 'calendar', icon: <AiOutlineCalendar /> },
                { name: 'kanban', icon: <BsKanban /> },
                { name: 'editor', icon: <FiEdit /> },
                { name: 'color-picker', icon: <BiColorFill /> },
            ],
        },
        {
            title: 'Charts',
            links: [
                { name: 'line', icon: <AiOutlineStock /> },
                { name: 'area', icon: <AiOutlineAreaChart /> },
                { name: 'bar', icon: <AiOutlineBarChart /> },
                { name: 'pie', icon: <FiPieChart /> },
                { name: 'financial', icon: <RiStockLine /> },
                { name: 'color-mapping', icon: <BsBarChart /> },
                { name: 'pyramid', icon: <GiLouvrePyramid /> },
                { name: 'stacked', icon: <AiOutlineBarChart /> },
            ],
        },
    ];




    return (
        <div className="lg:flex-[1] lg:w-max w-[15rem] md:static absolute z-[100000] ddark-bg-secondary-dark bg-white h-screen md:overflow-auto overflow-auto mdd:hover:overflow-auto pb-10  " >

            {/* Logo and title */}
            <div className="flex justify-between items-center " >
                {/* title */}
                <Link to="/" onClick={handleCloseSidebar} className="item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight ddark:text-white text-slate-900 " >   {/* tracking-tight - letter-spacing:-.25rem */}
                    <SiShopware /> <span>Shoppy</span>
                </Link>
                {/* sidebar close icon */}
                <Tooltip title='Menu' placement="bottom" >
                    <button type="button" onClick={() => setActiveMenu((prev) => !prev)}
                        className="text-2xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                    >
                        <MdOutlineCancel />
                    </button>
                </Tooltip>
            </div>


            {/* all sidebar items */}
            <div className="mt-10" >
                {
                    links.map((item) => (
                        <div key={item.title}>
                            <p className="text-gray-400 m-3 mt-4 uppercase"  >
                                {item.title}
                            </p>
                            {
                                item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSidebar}
                                        style={({ isActive }) => ({ backgroundColor: isActive && currentColor })}   // isActive byDefault provided by NavLink component of react-router-dom
                                        className={({ isActive }) => `flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg mx-[8px] my-[2px] text-md  ${isActive ? 'text-white mx-[8px] my-[2px]' : 'text-gray-700 ddark:text-gray-200 ddark:hover:text-black hover:bg-light-gray '}`}
                                    >
                                        {link.icon}
                                        <span className="capitalize" >{link.name}</span>
                                    </NavLink>
                                ))
                            }
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Sidebar
