import InputGroup from "../components/InputGroup";
import FileInput from "../components/FileInput";
import Button from "../components/Button";

const AddBook = () => {
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Tambah Buku
      </h1>
      <form className="max-w-[722px]">
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Judul buku"} hint={"Contoh: Filosofi Teras"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <FileInput
              label={"Foto Cover"}
              hint={"Tipe: png, jpg, jpeg. Ukuran: <1mb"}
              accept={".jpg, .JPG, .jpeg, .JPEG, .png, .PNG"}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Penulis buku"}
              hint={"Contoh: Henry Manampiring"}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Penerbit"} hint={"Contoh: Gramedia"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Tanggal Terbit"} hint={"Contoh: 15/02/2024"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Jumlah Halaman"} hint={"Contoh: 100"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Kategori"} hint={"Filsafat"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Bahasa"} hint={"Indonesia"} />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup label={"Lokasi"} hint={"Dipisah dengan titik koma"} />
          </div>
          <div className="flex w-full flex-col gap-[10px] sm:max-w-[722px]">
            <label htmlFor="description">Deskripsi</label>
            <textarea className="mb-[10px] h-[260px] w-full rounded-lg border border-[#757575] p-[30px] text-[1.15rem] text-zinc-500 " />
          </div>
        </div>
        <div className="my-[30px] sm:max-w-[200px]">
          <Button text={"Tambah buku"} isFull />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
