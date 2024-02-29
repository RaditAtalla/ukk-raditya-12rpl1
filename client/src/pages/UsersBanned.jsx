import { Eye, ThumbsUp } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";

const UsersBanned = () => {
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Pengguna
      </h1>
      <div className="flex gap-[8px]">
        <SearchBar placeholder={"Cari buku.."} />
      </div>
      <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
        <thead>
          <tr>
            <th className="px-[10px]">#</th>
            <th>Username</th>
            <th>Alasan</th>
            <th>Tgl. Ban</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <ListCard
            no={1}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={2}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={3}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={4}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={5}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={6}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={7}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={8}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={9}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
          <ListCard
            no={10}
            col1={"@radit.rchmd"}
            col2={"Melanggar aturan"}
            col3={"15/02/24"}
            icon1={<Eye />}
            icon2={<ThumbsUp />}
          />
        </tbody>
      </table>
    </div>
  );
};

export default UsersBanned;
