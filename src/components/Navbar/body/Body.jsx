import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Skills from './skills/Skills'

const Body = () => {
    return (
        <>
            <section className='py-[4rem]'>
                <h1 className='text-center text-[3rem]'>Welcome!</h1>
                <img src="https://res.cloudinary.com/abasskola/image/upload/v1728502396/channels4_profile_1_nvu567.jpg" alt="" className='rounded-full border-[5px] border-[red] mx-auto my-[2rem] h-[20rem] w-[20rem] object-contain ' />
                <div id='About me'>
                    <p className=' text-balance text-center text-[1.5rem]'>
                        <span className='text-[2rem] font-[600]'>Hello, I'm Azeez Abass, a full-stack MERN developer based in Nigeria.</span><br />
                        I specialize in both frontend and backend development, with expertise in HTML, CSS, JavaScript, React/Next.js, Node.js, Express, and MongoDB. I’m passionate about building modern, responsive web applications that deliver exceptional user experiences. I’m currently open to full-time opportunities as well as freelance projects. If you're looking to collaborate or have any questions, feel free to reach out!
                    </p>
                </div>
                <div className={`my-4 text-center text-[#12D7CE]`}>
                    <Link className=' underline underline-offset-1 hover:text-[#F32A08] duration-500'>Abasskola10@gmail.com</Link>
                </div>
                <div className='my-4' id='Skills'>
                    <h1 className='text-[3rem] underline-offset-4 underline text-center my-1'>Skills</h1>
                    <Skills />
                </div>
                <div className='my-4' id='Projects'>
                    <h1 className='text-[3rem] underline-offset-4 underline text-center my-1'>Porjects</h1>
                    <Projects />
                </div>
                <div>
                    <h1 className='text-[3rem] underline-offset-4 underline text-center'>Contact</h1>
                    <Contact />
                </div>
            </section>
        </>
    )
}

export default Body