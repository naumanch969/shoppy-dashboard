import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Contacts,
  Calendar,
  Users,
  Stacked,
  Pyramid,
  Kanban,
  Area,
  Bar,
  Line,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
} from "./pages";
import { Tooltip } from "@mui/material";
import { useStateContext } from "./contexts/ContextProvider";

const App: React.FC = () => {
  const {
    screenSize,
    setScreenSize,
    activeMenu,
    setActiveMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize < 768) setActiveMenu(false);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="w-screen h-screen">
      <div className="flex relative w-full h-full overflow-hidden bg-main-dark">
        {/* Settings toggle button */}
        <div className="fixed bottom-4 right-4 z-[10000000000000]">
          <Tooltip title="Settings" placement="top">
            <button
              type="button"
              onClick={() => setThemeSettings((pre: boolean) => !pre)}
              className="text-3xl p-3 bg-blue hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        {/* Sidebar */}
        {activeMenu && <Sidebar />}

        <div
          className={`flex-[4] h-screen overflow-y-scroll bg-main ${activeMenu ? "md:ml-0" : "flex-2"
            }`}
        >
          <div className="sticky top-0 h-[4rem] shadow-navbar bg-white navbar w-full">
            <Navbar />
          </div>

          {/* Routes */}
          <div className="md:px-3 md:pt-[1rem] md:pb-[2rem] px-1 pt-[8px] pb-[1rem] w-full h-full">
            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Navigate to="/ecommerce" />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/users" element={<Users />} />
              <Route path="/contacts" element={<Contacts />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
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
  );
};

export default App;
