import { Dispatch, SetStateAction } from "react";
import { RiSearch2Line } from "react-icons/ri";

type FieldTypes = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onFocus: () => void;
  onBlur: () => void;
};

const TextField = ({ value, onChange, onFocus, onBlur }: FieldTypes) => {
  return (
    <div className="w-full flex items-center bg-transparent justify-center gap-3 lg:h-[55px] h-[50px] rounded-[18px] border-2 border-[#3d3d3d] px-3">
      <RiSearch2Line size={26} className="text-zinc-400" />
      <input
        autoFocus={true}
        type="text"
        placeholder="Search Keywords..."
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none lg:text-lg text-zinc-100 placeholder:text-gray-400"
      />
    </div>
  );
};

export default TextField;
