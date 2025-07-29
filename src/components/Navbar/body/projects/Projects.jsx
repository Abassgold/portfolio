
import { projectArr } from "./ProjectArr";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center  gap-4 ">
        {projectArr?.map((item, index) => (
          <div className="border-[#606A92] border-[1px] p-2  rounded-md shadow-lg" key={index}>
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
                <a target='_blank' rel='noopener noreferrer' href={item?.source} className=" underline underline-offset-2 hover:text-[#F80D05] duration-500">Source code</a>
                <Link to={``} className=" underline underline-offset-2 hover:text-[#F80D05] duration-500">View details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects