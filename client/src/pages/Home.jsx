import BookCard from "../components/BookCard";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="md:px-10 xl:flex xl:items-start xl:gap-[50px]">
      <img
        src="img/banner.png"
        alt="banner"
        className="hidden w-[300px] border border-slate-200 object-contain shadow-lg shadow-slate-200 xl:inline-block"
      />
      <div>
        <div className="mb-[50px] flex flex-col gap-[10px] px-[20px] sm:px-0 lg:flex-row">
          <SearchBar placeholder={"Cari buku.."} />
          <div className="w-full lg:w-[300px]">
            <Dropdown
              placeholder={"Kategori"}
              values={["Filasafat", "Psikologi", "Ilmiah", "Novel", "Komik"]}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-center gap-[50px]">
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
          <BookCard
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            image={"img/cover.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home