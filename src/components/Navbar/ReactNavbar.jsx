import React, { useRef, useState } from 'react'
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { changeBg, setTargetSection } from '../../redux/features';
import { useDispatch, useSelector } from 'react-redux';
const ReactNavbar = () => {
    const dispatch = useDispatch();
    const { isChanged, targetSection } = useSelector(state => state.features)
    const [isDropDown, setisDropDown] = useState(false)
    function handleChage(ref) {
        dispatch(changeBg())
    }
    console.log(targetSection);
    
    const dropDown = function () {
        setisDropDown(!isDropDown)
    }
    const NavDropDown = function (ref) {
        setisDropDown(!isDropDown)
        dispatch(setTargetSection(ref))
    }
    const scrollToSection = (ref) => {
        dispatch(setTargetSection(ref))
    };
    const listArr = ['About me', 'Projects', 'Skills', 'Links'];
    return (
        <>
            <section className=' relative'>
                <div className='max-w-[80rem] mx-auto'>
                    <nav className='p-2 flex justify-between items-center text-white'>
                        <div className=''>
                            <h1 className='text-[2rem]'>Azeez</h1>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <div className='md:block hidden'>
                                <ul className='flex justify-between cursor-pointer items-center gap-4 text-[1.4rem]'>
                                    {listArr?.map((item, index) => (
                                        <li key={index} onClick={() =>scrollToSection(item)}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='md:hidden block'>
                                <AiOutlineClose
                                    className={`text-[2rem] ${isDropDown ? 'block' : 'hidden'} cursor-pointer`}
                                    onClick={dropDown}
                                />
                                <IoMenuSharp
                                    className={`text-[2rem] ${isDropDown ? 'hidden' : 'block'} cursor-pointer`}
                                    onClick={dropDown}
                                />
                            </div>
                            <IoMdMoon className={`text-[2rem] cursor-pointer ${isChanged ? 'hidden' : 'block'}`} onClick={handleChage} />
                            <FiSun className={`text-[2rem] cursor-pointer ${!isChanged ? 'hidden' : 'block'}`} onClick={handleChage} />
                        </div>
                    </nav>
                </div>
                <div

                    className={`md:hidden origin-top transition-all text-white duration-500 ease-in-out ${isDropDown ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} transform-gpu absolute z-10 bg-[#1c4b82] w-full`}>
                    <ul className='p-4'>
                        {listArr?.map((item, index) => (
                            <li key={index} className='hover:bg-black rounded-sm p-2 cursor-pointer py-2' onClick={()=>NavDropDown(item)}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ReactNavbar