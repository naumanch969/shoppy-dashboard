import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdNotifications, MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { Tooltip } from '@mui/material';
import { FiPieChart, FiShoppingBag } from 'react-icons/fi';
import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { BsBarChart, BsKanban } from 'react-icons/bs';
import { BiColorFill, BiUser } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { ContactMail, Settings } from '@mui/icons-material';

interface LinkItem {
  name: string;
  icon: any;
}

interface SidebarLink {
  title: string;
  links: LinkItem[];
}

const Sidebar: React.FC = () => {
  const { setActiveMenu, activeMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const links: SidebarLink[] = [
    {
      title: 'Dashboard',
      links: [{ name: 'ecommerce', icon: <FiShoppingBag /> }],
    },
    {
      title: 'Portfolio',
      links: [
        { name: 'users', icon: <BiUser /> },
        { name: 'contacts', icon: <ContactMail /> },
      ],
    },
    {
      title: 'Codegem',
      links: [
        { name: 'users', icon: <BiUser /> },
        { name: 'notifications', icon: <MdNotifications /> },
        { name: 'settings', icon: <Settings /> },
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
    <div className="lg:flex-[1] lg:w-max w-[15rem] md:static absolute z-[100000] ddark-bg-secondary-dark bg-white h-screen md:overflow-auto overflow-auto mdd:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight ddark:text-white text-slate-900"
        >
          <SiShopware /> <span>Shoppy</span>
        </Link>
        <Tooltip title="Menu" placement="bottom">
          <button
            type="button"
            onClick={() => setActiveMenu((pre: boolean) => !pre)}
            className="text-2xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </Tooltip>
      </div>

      <div className="mt-10">
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : undefined,
                })}
                className={({ isActive }) =>
                  `flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg mx-[8px] my-[2px] text-md ${isActive
                    ? 'text-white mx-[8px] my-[2px]'
                    : 'text-gray-700 ddark:text-gray-200 ddark:hover:text-black hover:bg-light-gray'
                  }`
                }
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
