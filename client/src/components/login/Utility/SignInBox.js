import {React,useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Utility/Input';
import Button from '../../Utility/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


function SignInBox() {
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const [isToast,setIsToast] = useState(false);

    const navigate = useNavigate();
    const handleClick = async ()=>{
        if(!loginEmail || !loginPassword){
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
          const response = await axios.post("http://localhost:5000/api/auth/login",{email:loginEmail,password:loginPassword},{ withCredentials: true });
          if(response.status === 200){
            toast.success("Login successful!",{position:"top-center"});
            setTimeout(()=>{
              navigate("/profile");
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
          toast.error(error.response.data.message,{position:"top-center"});
        }
    }

    
  return (
    <>
      <div className="w-[100vw] h-[500px] absolute top-[150px] left-[33%]">
        <div className="relative bg-black/80 h-[500px] w-[550px]  ">
            <h1 className="text-white font-bold text-[40px] absolute top-[40px] left-[70px]"> 
                Sign In
            </h1>
            <ToastContainer />
            <Input value={loginEmail} setValue={setLoginEmail} type="email" id="email" message="Email"/>
            <Input value={loginPassword} setValue={setLoginPassword} type="password" id="password" message="Password"/>

            <Button 
              icon={false}
              message={"Sign In"}
              handleClick={handleClick}
              messageClass={null}
              classes={"absolute bg-red-600 cursor-pointer hover:bg-red-700 text-white top-[350px] left-[70px] text-[25px] text-bold h-[60px] w-[400px] grid place-content-center rounded-[5px]"}
              />

            <div>
              <p className="text-white text-[15px] absolute top-[420px] left-[140px]">Don't have an account? </p>
              <p className="text-white text-[15px] cursor-pointer hover:underline absolute top-[420px] left-[310px]" onClick={()=>{
                navigate("/signup");
              }}>Sign Up</p>
            </div>



        </div>
      </div>
    </>

  )
}

export default SignInBox;
