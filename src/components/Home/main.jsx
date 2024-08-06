import React,{useEffect} from 'react'
import './home.css'
import { BsFileEarmarkPdf, BsGithub, BsChevronDoubleDown } from "react-icons/bs";


export default function HomeComponent() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('head1').classList.toggle('show', true)
      document.getElementById('head2').classList.toggle('show', true)
      setTimeout(() => {
        document.getElementById('foot1').classList.toggle('show', true)
        document.getElementById('foot2').classList.toggle('show', true)
      }, 1500);
    }, 500);
  }, [])

  return (
    <div className='h-full pt-[3%]'>
      <div className='flex justify-center items-center h-[80%] pt-[7%] pb-[5%]'>
        <div id="headContainer" className='w-7/12'>
          <div className='text-center tracking-[5px] text-lg' id="head1">
            HI I AM <div className='inline text-blue-500'>JEREMIAH ANKU COBLAH</div>
          </div>
          <div className='welcome text-center animate-charcter mb-10 mt-2' id="head2">
            Introducing my portfolio
          </div>
          <div className='text-sm opacity-60 text-center tracking-[3px] text-pink-600' id='foot1'>
           <span className='text-slate-400'>SOFTWARE</span> DEVELOPER
            <br />
            <div className='text-white tracking-widest mt-2'>
            
            </div>

          </div>
          <div className='flex gap-5 justify-center mt-5 text-[1vw]' id='foot2'>
            <button id='btnText' onClick={()=>{window.location.href = "https://drive.google.com/file/d/17YFKflQxGggZ4ywoxQuwWSJmWmzgHQVN/view"}} className=' border border-2 rounded text-[1em] hover:bg-white hover:text-black flex gap-2'>
              <BsFileEarmarkPdf className='  text-[1.4em]' />
              <div>RESUME</div>
            </button>
            <button onClick={() => { window.location.href = "https://github.com/Jerry-Khobby" }} id='btnText' className='border border-2 rounded  text-[1em] hover:bg-white hover:text-black flex gap-2'>
              <BsGithub className=' text-[1.4em]' /><div>
                GITHUB</div></button>
          </div>
        </div>
      </div>
    </div>
  )
}
