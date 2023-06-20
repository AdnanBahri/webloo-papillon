import {
  BANK_URL,
  BEER_URL,
  COLA_URL,
  ELF_URL,
  GOLF_URL,
  KING_URL,
  PARFUM_URL,
  PIZZA_URL,
} from "@/utils/dummy";
import Image from "next/image";

const Staggred = () => {
  return (
    <div className="mt-10 w-full flex flex-col items-center gap-8">
      <h1 className="text-5xl font-extrabold"> Experience</h1>
      <div className="w-full max-h-[700px] grid grid-cols-4 grid-rows-4">
        <div className="col-span-2 row-span-2">
          <img src={ELF_URL} alt="elf" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2">
          <img
            src={PIZZA_URL}
            alt="pizza"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <img
            src={BEER_URL}
            alt="beer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <img
            src={BANK_URL}
            alt="bank"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <img
            src={PARFUM_URL}
            alt="beer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src={COLA_URL}
            alt="cola"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 bg-black">
          <img
            src={KING_URL}
            alt="beer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <img
            src={GOLF_URL}
            alt="golf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Staggred;
