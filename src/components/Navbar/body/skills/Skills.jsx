import { DiJavascript } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6"
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiRedux } from "react-icons/si";

const Skills = () => {
    const skilArr = [
        { name: 'FrontEnd (HTML,CSS,JS)', icon: <DiJavascript /> },
        { name: 'Backend/Nodejs', icon: <TbBrandNodejs /> },
        { name: 'React/NextJS', icon: <GrReactjs /> },
        { name: 'Git/GitHub', icon: <GrReactjs /> },
        { name: 'Firebase', icon: <IoLogoFirebase /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Redux&Redux-toolkit', icon: <SiRedux /> },
        { name: 'Php/Laravel', icon: <FaLaravel /> },
    ]
    return (
        <>
            <section className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10 my-1'>
                {skilArr?.map((items, index) => (
                    <div className="shadow-lg">
                        <div className="flex gap-[0.3rem] items-center text-[24px]">
                            <div className="text-[#949090] text-[2.5rem]">
                                {items?.icon}
                            </div>
                            <h4>{items?.name}</h4>
                        </div>
                        <div className="clip" id="clip1"></div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Skills