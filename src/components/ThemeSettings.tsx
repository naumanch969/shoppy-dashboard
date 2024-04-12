import { MdOutlineCancel } from "react-icons/md"
import { BsCheck } from "react-icons/bs"

import { themeColors } from "../data/dummy"
import { useStateContext } from "../contexts/ContextProvider"
import { Tooltip } from "@mui/material"


const ThemeSettings = () => {


    const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()

    return (
        <div className="h-screen w-[20rem] z-[10000000] bg-[rgba(248,248,248)] fixed top-0 right-0  ">

            <div className=" z-55 ddark:text-gray-200 bg-white ddark:bg-[#484852] w-full " > {/* ****** */}

                <div className="flex justify-between items-center p-[1rem] w-full " >
                    <p className="font-semibold text-xl" >Settings</p>
                    <button
                        type="button"
                        onClick={() => setThemeSettings(false)}
                        className="text-[rgb(153,171,180)] rounded-full "
                    >
                        <MdOutlineCancel className="text-[3rem] p-2 hover:drop-shadow-xl hover:bg-light-gray " />
                    </button>
                </div>



                <div className="flex-col border-t-1 border-color p-[1rem] w-full " >
                    <p className="font-semibold text-lg" >Theme Options</p>
                    <div className="mt-4" >
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={setMode}
                            checked={currentMode === 'Light'}
                        />
                        <label htmlFor="light" className="ml-2 text-md cursor-pointer" >
                            Light
                        </label>
                    </div>
                    <div className="mt-4" >
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            className="cursor-pointer"
                            onChange={setMode}
                            checked={currentMode === 'Dark'}
                        />
                        <label htmlFor="dark" className="ml-2 text-md cursor-pointer" >
                            Dark
                        </label>
                    </div>
                </div>


                <div className="flex-col border-t-1 border-color p-4 ml-4 " >
                    <p className="font-semibold text-lg" >Theme Colors</p>
                    <div className='flex flex-wrap gap-3 ' >
                        {
                            themeColors.map((item, index) => (
                                    <Tooltip title={item.name} placement="top" >
                                        <div className="relative flex mt-2 cursor-pointer gap-5 items-center " >
                                            <button
                                                type='button'
                                                style={{ backgroundColor: item.color }}
                                                onClick={() => setColor(item.color)}
                                                className="h-[2.5rem] w-[2.5rem] rounded-full cursor-pointer flex justify-center items-center "
                                            >
                                                <BsCheck style={{ display: item.color == currentColor ? 'block' : 'hidden' }} className={`text-2xl text-white `} />
                                            </button>
                                        </div>
                                    </Tooltip>
                            ))
                        }
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ThemeSettings
