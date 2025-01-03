import { GrInstagram } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <p className='text-[2.5rem] py-1 font-[700]'>Let's Collaborate!</p>
            <small className=' text-[1.2rem]'>2024 © All right Reserved</small>
            <small className=' text-[1.2rem] block mb-1'>Azeez Abass</small>
            <div className='py-2 text-[1.5rem]'>
                <div className='flex justify-center items-center gap-[2rem]'>
                    <a href="https://www.instagram.com/kolawole_gold10?igsh=MXkxMTh1OWo5eWxoMQ==" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e => navigate('')} >
                        <GrInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/azeez-abass-4b8015222/" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e => navigate('')} >
                        <LuLinkedin />

                    </a>
                    <a href="https://github.com/Abassgold" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e => navigate('')} >
                        <FaGithub />
                    </a>
                    <a href="https://x.com/Kolawolegold10?t=B_F2wdRvQZGrLJD4Zu62kg&s=09" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e => navigate('')} >
                        <TfiTwitter />
                    </a>
                    <a href="https://wa.me/qr/BHKITMXTHP2PE1" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:text-[#F80D05] duration-500" onClick={e => navigate('')} >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer