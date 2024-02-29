import { Link } from "react-router-dom";
import Button from "./Button";
import HeartButton from "./HeartButton";

const BookCard = ({ image, title, author, date, action }) => {
  return (
    <div
      className="w-[300px] rounded-lg border border-slate-200 shadow-md shadow-slate-200"
      onClick={action}
    >
      <img
        src={image}
        alt="Cover buku"
        style={{ width: "100%", height: 226, objectFit: "contain" }}
      />
      <div className="flex flex-col gap-[50px] p-[20px]">
        <div>
          <h2 className="line-clamp-1 text-[1.5rem] font-medium leading-none">
            {title}
          </h2>
          <p className="line-clamp-1 text-[1.15rem] text-zinc-500">{author}</p>
          <p className="line-clamp-1 text-[1.15rem] text-zinc-500">
            Dikembalikan pada {date}
          </p>
        </div>
        <div className="flex gap-[8px]">
          <Link to={"/lihat"} className="w-full">
            <Button text="Lihat" isFull />
          </Link>
          <HeartButton />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
