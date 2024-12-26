interface ConcernsProps {
  concernsData: string[];
}

function Concerns({ concernsData: concerns }: ConcernsProps) {
  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white border overflow-hidden border-[#dcdcdc] ">
      {/* header */}
      <div className="py-4 px-7 justify-between flex bg-gradient-to-r from-[#fbfcfb] to-[#f4f7ec]">
        <p className="font-nunito font-semibold text-[24px] text-[#313131]">
          The Concerns I Treat
        </p>
      </div>

      {/* body */}
      <div className="flex py-8 px-7   w-full gap-[24px] flex-wrap ">
        {/* concerns chips */}
        {concerns.slice(0, 6).map((concern, ind) => {
          return (
            <p
              key={ind + 1}
              className="p-[10px] rounded-[19px] bg-[#f7f7fc] font-poppins font-medium text-[16px] leading-[18px] text-primary"
            >
              {concern}
            </p>
          );
        })}
        {concerns.length > 6 && (
          <button className="flex justify-center items-center p-[10px] rounded-[19px] border border-[#e0dfdf] bg-white font-poppins font-medium text-[16px] leading-[18px] text-primary">
            <span>+{concerns.length - 6} more</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default Concerns;
