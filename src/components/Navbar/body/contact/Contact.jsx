import { useSelector } from "react-redux"

const Contact = () => {
    const { isChanged } = useSelector(state => state.features)
    console.log(isChanged);
    
    return (
        <>
            <section>
                <form action="" className="text-[1.4rem] font-[400]">
                    <div className='relative my-2'>
                        <input type="text" placeholder="--Your Name--" className={`${isChanged ?'border-[#082032]' : 'border-[#ffffff]'}  border-[2px] w-full rounded-[0.2rem] p-4 outline-none focus:border-[#0F80F1] bg-inherit`}  />
                    </div>
                    <div className='relative my-2'>
                        <input type="email" placeholder="Example@gmail.com" className={`${isChanged ?'border-[#082032]' : 'border-[#ffffff]'} bg-inherit  border-[2px] w-full rounded-[0.2rem] p-4 outline-none focus:border-[#0F80F1]`} />
                    </div>
                    <div className='relative my-2'>
                        <textarea name="" rows='5' id="" placeholder="Message..." className={`${isChanged ?'border-[#082032]' : 'border-[#ffffff]'} bg-inherit  border-[2px] w-full rounded-[0.2rem] p-4 outline-none focus:border-[#0F80F1]`}></textarea>
                    </div>
                    <div className="text-end">
                        <button className="py-2 px-4  font-[500] text-white bg-[#0d6efd] hover:bg-[#082032] duration-300 rounded-[0.2rem]">Send</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact