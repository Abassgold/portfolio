import { GrInstagram } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <p className='text-[2.5rem] py-1 font-[700]'>Let's Collaborate!</p>
            <small className=' text-[1.2rem]'>2023 © All right Reserved</small>
            <small className=' text-[1.2rem] block mb-1'>Azeez Abass</small>
            <div className='py-2 text-[1.5rem]'>
                <div className='flex justify-center items-center gap-[2rem]'>
                    <GrInstagram className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e=>navigate('')} />
                    <LuLinkedin className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e=>navigate('')}/>
                    <FaGithub className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e=>navigate('')}/>
                    <TfiTwitter className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e=>navigate('')} />
                </div>
            </div>
        </>
    )
}

export default Footer