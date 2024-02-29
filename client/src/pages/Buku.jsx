import { Edit, Plus, Trash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";

const Buku = () => {
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Buku
      </h1>
      <div className="flex gap-[8px]">
        <SearchBar placeholder={"Cari buku.."} />
        <Link
          to={"tambah"}
          className="flex items-center justify-center rounded-lg bg-black px-[15px]"
        >
          <Plus color="white" />
        </Link>
      </div>
      <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
        <thead>
          <tr>
            <th className="px-[10px]">#</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tgl. Ditambah</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <ListCard
            no={1}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={2}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={3}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={4}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={5}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={6}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={7}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={8}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={9}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
          <ListCard
            no={10}
            img={"/img/cover.jpg"}
            col1={"Filosofi Teras"}
            col2={"Henry Manampiring"}
            col3={"15/02/24"}
            icon1={<Edit />}
            icon2={<Trash />}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Buku;
