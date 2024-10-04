import { DiJavascript } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6"
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiRedux } from "react-icons/si";
import { projectArr } from "./ProjectArr";
import { Link } from "react-router-dom";
const Projects = () => {

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
      <section>
        <section className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10 my-2'>
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
        <h1 className='text-[3rem] underline-offset-4 underline text-center'>Projects</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center  gap-4">
          {projectArr?.map((item, index) => (
            <div className="border-[#606A92] border-[1px] p-2  rounded-sm">
              <img src={item?.img} alt="" className="h-[15rem] w-full object-fill my-2" />
              <div>
                <div>
                  <p className="text-[1.3rem]">Description: <span className="text-[1.1rem] text-[#606A92]">{item?.description}</span></p>
                </div>
                <div>
                  <h1 className="text-[1.3rem]">Stack/Tools: <span className="text-[1.2rem] text-[#606A92]">{item?.stack}</span></h1>
                </div>
                <div className="flex justify-center gap-2 items-center text-[1.2rem] font-[500]">
                  <a
                    href={item?.link}
                    className="underline underline-offset-2 hover:text-[#F80D05] duration-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go live
                  </a>
                  <a target='_blank' rel='noopener noreferrer' href={item?.source}  className=" underline underline-offset-2 hover:text-[#F80D05] duration-500">Source code</a>
                  <Link to={``} className=" underline underline-offset-2 hover:text-[#F80D05] duration-500">View details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects