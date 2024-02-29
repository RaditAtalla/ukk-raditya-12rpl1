import Button from "../components/Button";
import ReviewCard from "../components/ReviewCard";
import HeartButton from "../components/HeartButton";
import HeartsDisplay from "../components/HeartsDisplay";
import ReviewButton from "../components/ReviewButton";
import { useState } from "react";
import ReactModal from "react-modal";
import { X } from "react-feather";
const ViewBook = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const handleModal = () => {
    setIsModalopen(!isModalOpen);
  };
  return (
    <div className="flex flex-col px-[20px] lg:px-[100px]">
      <ReactModal
        isOpen={isModalOpen}
        className={
          "flex h-full w-full items-center rounded-lg px-[20px] lg:justify-center"
        }
      >
        <form className="lg:px[40px] w-full rounded-lg border-2 border-slate-200 bg-white px-[20px] py-[30px] lg:w-[550px] lg:py-[60px]">
          <X className="ms-auto cursor-pointer" onClick={handleModal} />
          <h2 className="mb-[12px] text-[3rem] font-medium">Tersedia di:</h2>
          <div className="mb-[12px] flex items-center justify-between leading-none">
            <label htmlFor="telkom" className="text-[1.5rem]">
              Perpustakaan Telkom
            </label>
            <input
              type="radio"
              id="telkom"
              name="location"
              className="accent-black"
            />
          </div>
          <div className="mb-[12px] flex items-center justify-between leading-none">
            <label htmlFor="unimed" className="text-[1.5rem]">
              Perpustakaan Unimed
            </label>
            <input
              type="radio"
              id="unimed"
              name="location"
              className="accent-black"
            />
          </div>
          <div className="mb-[12px] flex items-center justify-between leading-none">
            <label htmlFor="gadjah mada" className="text-[1.5rem]">
              Perpustakaan Gadjah Mada
            </label>
            <input
              type="radio"
              id="gadjah mada"
              name="location"
              className="accent-black"
            />
          </div>
          <div className="mb-[35px] flex items-center justify-between">
            <label htmlFor="tasbih" className="text-[1.5rem]">
              Perpustakaan tasbih
            </label>
            <input
              type="radio"
              id="tasbih"
              name="location"
              className="accent-black"
            />
          </div>
          <Button text={"Reservasi"} isFull />
        </form>
      </ReactModal>
      <div className="lg:flex lg:gap-[50px]">
        <div className="mb-[10px] w-full py-[20px] lg:m-0 lg:w-auto lg:p-0">
          <div className="flex h-[400px] justify-center rounded-lg lg:h-[421px] lg:w-[421px]">
            <img src="img/cover.jpg" alt="Book Cover" />
          </div>
          <p className="hidden text-[1.15rem] font-medium leading-none lg:mt-[20px] lg:block">
            1.502 orang menyukai buku ini
          </p>
          <div className="mb-[40px] mt-[20px] hidden lg:flex lg:items-center lg:gap-[10px]">
            <Button text={"pinjam"} isFull action={handleModal} />
            <HeartButton />
          </div>
          <div className="mb-[40px] mt-[20px] hidden gap-[20px] lg:flex">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Penerbit
                </p>
                <p className="text-[1.15rem] leading-none">
                  Kompas Penerbit Buku
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Tanggal Terbit
                </p>
                <p className="text-[1.15rem] leading-none">18 Desember 2018</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Jumlah Halaman
                </p>
                <p className="text-[1.15rem] leading-none">346 Lembar</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Bahasa
                </p>
                <p className="text-[1.15rem] leading-none">Indonesia</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Kategori
                </p>
                <p className="text-[1.15rem] leading-none">Filsafat</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[20px] flex justify-between lg:mb-[10px]">
            <p className="text-[1.15rem] font-medium lg:hidden">
              1.502 orang menyukai buku ini
            </p>
            <HeartsDisplay amount={5} />
          </div>
          <h1 className="text-[3rem] font-semibold leading-none">
            Filosofi Teras
          </h1>
          <p className="text-[1.5rem] text-zinc-500 lg:mb-[20px]">
            Henry Manampiring
          </p>
          <div className="mb-[40px] mt-[20px] flex items-center gap-[10px] lg:hidden">
            <Button text={"pinjam"} isFull action={handleModal} />
            <HeartButton />
          </div>
          <p className="my-[20px] text-[1.15rem] leading-relaxed text-zinc-500">
            Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar
            masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau
            Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa
            membantu kita mengatasi emosi negatif dan menghasilkan mental yang
            tangguh dalam menghadapi naik-turunnya kehidupan. Jauh dari kesan
            filsafat sebagai topik berat dan mengawang-awang, Filosofi Teras
            justru bersifat praktis dan relevan dengan kehidupan Generasi
            Milenial dan Gen-Z masa kini.
          </p>
          <div className="mb-[40px] mt-[20px] flex gap-[20px] lg:hidden">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Penerbit
                </p>
                <p className="text-[1.15rem] leading-none">
                  Kompas Penerbit Buku
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Tanggal Terbit
                </p>
                <p className="text-[1.15rem] leading-none">18 Desember 2018</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Jumlah Halaman
                </p>
                <p className="text-[1.15rem] leading-none">346 Lembar</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Bahasa
                </p>
                <p className="text-[1.15rem] leading-none">Indonesia</p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-[1.15rem] leading-none text-zinc-500">
                  Kategori
                </p>
                <p className="text-[1.15rem] leading-none">Filsafat</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-semibold">Ulasan</h2>
            <ReviewButton />
            <div className="my-[20px] flex flex-col gap-[20px]">
              <ReviewCard
                image={"img/profil.png"}
                name={"Raditya Atallahasyrif Rachmadie"}
                rating={5}
                username={"@radit.rchmd"}
                comment={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi laboriosam, quasi facilis repellat iste porro distinctio! Explicabo, a aliquid."
                }
              />
              <ReviewCard
                image={"img/profil.png"}
                name={"Raditya Atallahasyrif Rachmadie"}
                rating={5}
                username={"@radit.rchmd"}
                comment={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi laboriosam, quasi facilis repellat iste porro distinctio! Explicabo, a aliquid."
                }
              />
              <ReviewCard
                image={"img/profil.png"}
                name={"Raditya Atallahasyrif Rachmadie"}
                rating={5}
                username={"@radit.rchmd"}
                comment={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi laboriosam, quasi facilis repellat iste porro distinctio! Explicabo, a aliquid."
                }
              />
              <ReviewCard
                image={"img/profil.png"}
                name={"Raditya Atallahasyrif Rachmadie"}
                rating={5}
                username={"@radit.rchmd"}
                comment={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi laboriosam, quasi facilis repellat iste porro distinctio! Explicabo, a aliquid."
                }
              />
              <ReviewCard
                image={"img/profil.png"}
                name={"Raditya Atallahasyrif Rachmadie"}
                rating={5}
                username={"@radit.rchmd"}
                comment={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi laboriosam, quasi facilis repellat iste porro distinctio! Explicabo, a aliquid."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
