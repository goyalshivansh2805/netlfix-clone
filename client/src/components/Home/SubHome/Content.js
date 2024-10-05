import {React , useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import context from '../../../context/Context.js';
import Button from '../../Utility/Button.js';


function Content() {

    const navigate = useNavigate();
    const {email,setEmail} = useContext(context);
    const handleClick = ()=>{
    navigate('/signup')
  }


  return (
    <div className="text-white h-full w-full">
        <div>

            <h1 className="font-bold text-[60px] absolute top-[36%] left-[30%]">
                Unlimited movies, TV
            </h1>

            <h2 className="font-bold text-[60px] absolute top-[45%] left-[35%]">
                shows and more
            </h2>

            <h3 className="text-[22px] absolute top-[56%] left-[40%] ">
                Starts at ₹149. Cancel anytime.
            </h3>

            <h3 className="text-[22px] absolute top-[64%] left-[30%]">
                Ready to watch? Enter your email to create or restart your
            </h3>

            <h3 className="text-[22px] absolute top-[68%] left-[45%]">
                membership.
            </h3>
        </div>

        <div className='absolute top-[75%] left-[25%]  h-[66px] w-[456px] bg-black/50  border-gray-500 rounded-[5px] border-[1px] text-white'>
            <input 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text" className=" peer z-[1] caret-white focus:outline-none bg-transparent h-[66px] w-[456px] pl-[15px]" id='email'/>
            <label htmlFor="email" className={`peer-focus:top-[3px] ease-in-out transition-all duration-300 peer-focus:text-[15px] peer-focus:left-[15px] absolute ${email?"top-[5px] left-[15px] text-[15px]":"top-[15px] left-[25px] text-[20px]"} text-gray-500`}>Email address</label>
        </div>
        
      <Button 
        handleClick={handleClick}
        messageClass={"absolute left-[20px] top-[15px]"}
        classes={"absolute top-[75%] right-[29.7%] rounded-[4px] text-[25px] hover:bg-red-700 cursor-pointer text-white font-bold w-[250px] h-[66px] bg-red-600"}
        message={'Get Started'}
        icon={true}
        />
    </div>
  )
}

export default Content
