import React, { useRef, useState } from 'react'
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { changeBg } from '../../redux/features';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';
const ReactNavbar = () => {
    const dispatch = useDispatch();
    const { isChanged } = useSelector(state => state.features)
    const [isDropDown, setisDropDown] = useState(false)
    function handleChage() {
        dispatch(changeBg())
    }
    const dropDown = function () {
        setisDropDown(!isDropDown)
    }
    const NavDropDown = function (ref) {
        setisDropDown(!isDropDown)
    }

    const listArr = ['About me', 'Skills', 'Projects', 'Links'];
    return (
        <>
            <section className='relative'>
                <div className='max-w-[80rem] mx-auto'>
                    <nav className='p-2 flex justify-between items-center text-white'>
                        <div className=''>
                            <img className='h-[4rem] w-[5rem] invert brightness-0 cursor-pointer object-fill' src='https://res.cloudinary.com/abasskola/image/upload/v1728317178/download__3_-removebg-preview_a1jpnz.png' alt="" />
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <div className='md:block hidden'>
                                <ul className='flex justify-between cursor-pointer items-center gap-4 text-[1.4rem]'>
                                    {listArr?.map((item, index) => (
                                        <li className='nav-item' key={index} onClick={() => scrollToSection(item)}>
                                            <Link className='block' to={item} spy={true} smooth={true} duration={500} offset={-100} activeClass='active'>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="https://drive.google.com/file/d/1PP5pYGdPWNV86LlNOBZZLzEcDd7Uu2gK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=' bg-[#E5340F] duration-500 p-2 hover:text-[#444444] hover:bg-[#F17771] font-[poppins] text-[1rem] rounded-md shadow-lg'>
                                            <button >
                                                Resume
                                            </button>
                                        </a>
                                    </li>
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
                            <li key={index} className=''>
                                <Link to={item} spy={true} smooth={true} duration={500} offset={-100} className='hover:bg-black p-2 rounded-sm cursor-pointer block' onClick={dropDown}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <a href="https://drive.google.com/file/d/1PP5pYGdPWNV86LlNOBZZLzEcDd7Uu2gK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='bg-[#E5340F] text-[#444444] rounded-sm mt-3 p-2 cursor-pointer shadow-lg' onClick={dropDown}>
                            <li >
                                Resume
                            </li>
                        </a>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default ReactNavbar;