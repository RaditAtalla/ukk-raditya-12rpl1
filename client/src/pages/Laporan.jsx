import NumberCard from "../components/NumberCard";
import Button from "../components/Button";
import LikedBooks from "../components/LikedBook";

const Laporan = () => {
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Laporan
      </h1>
      <div className="no-scrollbar flex snap-x snap-proximity gap-[20px] overflow-auto xl:snap-none xl:flex-wrap xl:overflow-hidden">
        <div className="min-w-[500px] snap-center scroll-ml-6 lg:snap-none">
          <NumberCard value="1502" name="Buku" />
        </div>
        <div className="min-w-[500px] snap-center scroll-ml-6 lg:snap-none">
          <NumberCard value="2007" name="Pengguna" />
        </div>
        <div className="min-w-[500px] snap-center scroll-ml-6 lg:snap-none">
          <NumberCard value="1502" name="Petugas" />
        </div>
      </div>
      <div className="mt-[50px]">
        <Button text={"Generate Laporan"} />
      </div>
      <h2 className="mt-[35px] text-[1.5rem] font-semibold leading-none">
        Statistik Buku
      </h2>
      <h3 className="mb-[30px] mt-2 text-[1.15rem] leading-none">
        Top paling disuka
      </h3>
      <div className="no-scrollbar flex snap-x snap-proximity gap-[20px] overflow-auto xl:snap-none xl:flex-wrap xl:overflow-hidden">
        <div className="snap-center xl:snap-none">
          <LikedBooks
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            likes={1.502}
            image={"/img/cover.jpg"}
          />
        </div>
        <div className="snap-center xl:snap-none">
          <LikedBooks
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            likes={1.502}
            image={"/img/cover.jpg"}
          />
        </div>
        <div className="snap-center xl:snap-none">
          <LikedBooks
            title={"Filosofi Teras"}
            author={"Henry Manampiring"}
            likes={1.502}
            image={"/img/cover.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Laporan;
