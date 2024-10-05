import {React,useState,useContext} from 'react';
import Input from '../../Utility/Input';
import { useNavigate } from 'react-router-dom';
import Button from '../../Utility/Button';
import Context from '../../../context/Context.js';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUpBox() {
    const [name,setName] = useState("");
    const {email,setEmail} = useContext(Context);
    const [signUpPassword,setSignUpPassword] = useState("");
    const [isToast,setIsToast] = useState(false);

    const navigate = useNavigate();
    const handleClick = async()=>{
        if(!name || !email || !signUpPassword){
          if(isToast){
            return;
          }
          setIsToast(true);
          setTimeout(()=>{
            setIsToast(false);
          },5000);
          return toast.error("Please fill all the fields!",{position:"top-center"});
        }

        try {
          const response = await axios.post("http://localhost:5000/api/auth/register",{
            name,
            email,
            password:signUpPassword
          })
          if(response.status === 200){
            toast.success(response.data.message,{position:"top-center"});
            setTimeout(()=>{
              navigate("/login");
            },2000);
          }
        } catch (error) {
          if(isToast){
            return;
          }
          setIsToast(true);
          setTimeout(()=>{
            setIsToast(false);
          },5000);
          toast.error(error.response.data.message,{position:"top-center"})
        }
    }

  return (
    <>

     <div className="w-[100vw] h-[700px] absolute top-[120px] left-[33%]">
        <div className="relative bg-black/80 h-[600px] w-[550px]  ">
            <h1 className="text-white font-bold text-[40px] absolute top-[40px] left-[70px]"> 
                Sign In
            </h1>
            <ToastContainer />
            <Input value={name} setValue={setName} type="text" id="name" message="Name"/>
            <Input value={email} setValue={setEmail} type="email" id="email" message="Email"/>
            <Input value={signUpPassword} setValue={setSignUpPassword} type="password" id="password" message="Password"/>

            <Button 
              icon={false}
              message={"Sign Up"}
              handleClick={handleClick}
              messageClass={null}
              classes={"absolute bg-red-600 cursor-pointer hover:bg-red-700 text-white top-[440px] left-[70px] text-[25px] text-bold h-[60px] w-[400px] grid place-content-center rounded-[5px]"}
              />


            <div>
              <p className="text-white text-[15px] absolute top-[520px] left-[130px]">Already have an account? </p>
              <p className="text-white text-[15px] cursor-pointer hover:underline absolute top-[520px] left-[310px]" onClick={()=>{
                navigate("/login");
              }}>Sign In</p>
            </div>

        </div>
      </div>
    </>
  )
}

export default SignUpBox