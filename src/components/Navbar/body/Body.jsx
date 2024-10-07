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
                <img src="https://yt3.ggpht.com/dpAh_e6itIQV_J_94PKD45wdvEzhedT_qHGaVhLJYsiFGdaRkSnPdGPAreYsVJBEPsVfSxAMiQ=s108-c-k-c0x00ffffff-no-rj" alt="" className='rounded-full border-[5px] border-[red] mx-auto my-[2rem] h-[20rem] w-[20rem] object-contain ' />
                <div id='About me'>
                    <p className=' text-balance text-center text-[1.5rem]'>
                        My name is Azeez Abass, A MEARN developer!
                        l'm a full-stack web developer based in Nigeria, working on both frontend and backend development projects. My skill set includes HTML, CSS, JavaScript React/Nextjs Nodejs, Express, and MongoDB. I am passionate about creating modern and engaging web applications that provide great user experiences.
                        I am actively seeking web developer roles and open to freelance projects. lf youre Intereste collaborating or have any questions, please dont hesitate to get in touch!
                    </p>
                </div>
                <div className={`my-4 text-center text-[#12D7CE]`}>
                    <Link className=' underline underline-offset-1 hover:text-[#F32A08] duration-500'>Abasskola10@gmail.com</Link>
                </div>
                <div className='my-4' id='Skills'>
                    <h1 className='text-[3rem] underline-offset-4 underline text-center my-1'>Skills</h1>
                    <Skills />
                </div>
                <div className='my-4'  id='Projects'>
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