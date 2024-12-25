// interface SearchInputProps {}

function SearchInput() {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="bg-white border font-inter border-[#cdcdcd] text-[#7B7b7B] text-[16px] tracking-[0.5px] rounded-[10px] focus:ring-[#3A643B] focus:border-[#3A643B] block w-[474px] px-[10px] py-[13px] "
        placeholder="eg. Doctor, specialisation, clinic name..."
        required
      />
      <button
        type="button"
        className="absolute inset-y-0 end-0 flex items-center pe-3"
      >
        <svg
          width="29"
          height="24"
          viewBox="0 0 29 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8354 4L13.1811 5.41L19.7279 11H5.44922V13H19.7279L13.1811 18.59L14.8354 20L24.2215 12L14.8354 4Z"
            fill="#1C1B1F"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchInput;
