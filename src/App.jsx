import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { FiSettings } from "react-icons/fi"
import { Footer, Navbar, Sidebar, ThemeSettings } from "./components"
import { Ecommerce, Orders, Customers, Calendar, Employees, Stacked, Pyramid, Kanban, Area, Bar, Line, Pie, Financial, ColorMapping, ColorPicker, Editor } from "./pages"
import { Tooltip } from "@mui/material"
import { useStateContext } from "./contexts/ContextProvider"

const App = () => {

  const { screenSize, setScreenSize, activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, [window.innerWidth])

  useEffect(() => {
    if (screenSize < 768) setActiveMenu(false)
  }, [screenSize])

  return (
    <div
      // className={currentMode === 'Dark' ? 'dark' : ''}
      className="w-screen h-screen  "
    >
      <div className="flex relative w-full h-full overflow-hidden ddark:bg-main-dark bg-white " >


        {/* settings toggle button */}
        <div className="fixed bottom-4 right-4 z-[10000000000000] "  >
          <Tooltip title='Settings' placement='top' >
            <button
              type="button"
              onClick={(() => setThemeSettings(pre => !pre))}
              className="text-3xl p-3 bg-blue hover:drop-shadow-xl hover:bg-light-gray text-white "
              style={{ background: currentColor, borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>


        {/* sidebar */}
        {activeMenu && <Sidebar />}


        <div className={`flex-[4] h-screen overflow-y-scroll ddark:bg-main-dark bg-main  ${activeMenu ? 'md:ml:72' : 'flex-2'}`} >

          <div className="sticky top-0 h-[4rem] shadow-navbar bg-white ddark:bg-main-dark navbar w-full" >
            <Navbar />
          </div>

          {/* routes */}
          <div className="md:px-[3rem] md:pt-[1rem] md:pb-[2rem] px-[1rem] pt-[8px] pb-[1rem]  w-full h-full " >

            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Navigate to='/ecommerce' />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />

            </Routes>
          </div>

        </div>





      </div>
    </div>
  )
}

export default App;





