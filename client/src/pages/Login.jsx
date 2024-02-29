import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";

const Login = () => {
  return (
    <form className="px-[20px] sm:mx-auto sm:block sm:w-[500px] sm:self-center sm:rounded-lg sm:border sm:border-slate-200 sm:px-[66px] sm:py-[45px] sm:shadow-lg sm:shadow-slate-200">
      <h1 className="mb-[60px] text-[3rem] font-medium">Masuk</h1>
      <div className="mb-[50px]">
        <InputGroup label={"Username/email"} labelSize="1.5" />
        <PasswordInput />
        <p className="text-[1.25rem] text-zinc-500">
          Belum ada akun?{" "}
          <Link to={"/daftar"} className="underline">
            Daftar
          </Link>
        </p>
      </div>
      <div className="">
        <Button text={"Masuk"} isFull />
      </div>
    </form>
  );
};

export default Login;
