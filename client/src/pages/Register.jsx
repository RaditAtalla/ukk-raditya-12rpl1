import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleClick = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="px-[20px] sm:mx-auto sm:block sm:w-[850px] sm:border sm:border-slate-200 sm:px-[66px] sm:py-[45px] sm:shadow-lg sm:shadow-slate-200">
      <h1 className="mb-[60px] text-[3rem] font-medium">Daftar</h1>
      <form className="flex flex-wrap items-center sm:gap-[15px]">
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup label={"Username"} labelSize="1.5" />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <PasswordInput />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup label={"Nama Lengkap"} labelSize="1.5" />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup label={"Alamat"} labelSize="1.5" />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup label={"Email"} labelSize="1.5" />
        </div>
        <div className="w-full sm:w-[350px] sm:self-end">
          <Button text={"Daftar"} isFull />
        </div>
      </form>
    </div>
  );
};

export default Register;
