interface FilterChipProps {
  text: string;
}

function FilterChip({ text }: FilterChipProps) {
  return (
    <div className=" flex font-inter  items-center text-[16px] tracking-[0.5px] text-black bg-[#EAF2EA] rounded-[31px] px-[20px] gap-[10px] py-[10px] ">
      <span>{text}</span>
      <button>
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9524 1.87522L1.04912 12.9676"
            stroke="#838383"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1.21484 1.875L10.9523 13.125"
            stroke="#838383"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default FilterChip;
