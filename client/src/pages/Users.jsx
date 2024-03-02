import { Slash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import InputGroup from "../components/InputGroup";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import formatDate from "../functions/formatDate";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => console.log("ada error: " + error));
  }, []);

  let i = 1;

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        className={
          "flex h-full w-full items-center rounded-lg px-[20px] lg:justify-center"
        }
      >
        <form
          action=""
          className="lg:px[40px] w-full rounded-lg border-2 border-slate-200 bg-white px-[20px] py-[30px] sm:px-[66px] lg:w-[550px] lg:py-[60px]"
        >
          <p className="text-[3rem] font-bold">Ban Pengguna?</p>
          <p className="mb-[35px] text-[1.15rem] font-bold leading-none text-zinc-500">
            Ban @radit.rchmd
          </p>
          <InputGroup
            label={"Alasan"}
            labelSize="1.5"
            className={"mb-[50px]"}
          />
          <Button text={"Ban"} isFull />
        </form>
      </ReactModal>
      <div className="px-[20px]">
        <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
          Pengguna
        </h1>
        <div className="flex gap-[8px]">
          <SearchBar placeholder={"Cari buku.."} />
          <Link
            to={"banned"}
            className="flex items-center justify-center rounded-lg bg-black px-[15px]"
          >
            <Slash color="white" />
          </Link>
        </div>
        <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
          <thead>
            <tr>
              <th className="px-[10px]">#</th>
              <th>Nama Lengkap</th>
              <th>Username</th>
              <th>Tgl. Bergabung</th>
              <th className="px-[10px]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <ListCard
                  key={user.UserID}
                  no={i++}
                  col1={user.NamaLengkap}
                  col2={user.Username}
                  col3={`${formatDate(user.TanggalBergabung)[1]} ${formatDate(user.TanggalBergabung)[2]} ${formatDate(user.TanggalBergabung)[3]}`}
                  icon1={<Slash onClick={handleModal} />}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
