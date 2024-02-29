import { Plus, Slash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import ReactModal from "react-modal";
import { useState } from "react";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";

const Petugas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          <p className="mb-[35px] text-[3rem] font-bold">Tambah petugas</p>
          <InputGroup
            label={"Username"}
            labelSize="1.5"
            className={"mb-[50px]"}
          />
          <Button text={"Tambah"} isFull />
        </form>
      </ReactModal>
      <div className="px-[20px]">
        <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
          Petugas
        </h1>
        <div className="flex gap-[8px]">
          <SearchBar placeholder={"Cari buku.."} />
          <div
            onClick={handleModal}
            className="flex items-center justify-center rounded-lg bg-black px-[15px]"
          >
            <Plus color="white" />
          </div>
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
            <ListCard
              no={1}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={2}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={3}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={4}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={5}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={6}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={7}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={8}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={9}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
            <ListCard
              no={10}
              col1={"Raditya Atallahasyrif Rachmadie"}
              col2={"@radit.rchmd"}
              col3={"15/02/24"}
              icon1={<Slash />}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Petugas;
