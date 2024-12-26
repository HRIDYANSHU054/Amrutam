import Review from "@/components/doctorPage/Review";
import { Review as TypeReview } from "@/types/Review";

interface ReviewsProps {
  reviewsData: TypeReview[];
}

function Reviews({ reviewsData: reviews }: ReviewsProps) {
  return (
    <section className="flex flex-col w-full rounded-[18px] bg-white border overflow-hidden border-[#dcdcdc] ">
      {/* header */}
      <div className="py-4 px-7 justify-between flex bg-gradient-to-r from-[#fbfcfb] to-[#f4f7ec]">
        <p className="font-nunito font-semibold text-[24px] text-[#313131]">
          Featured Reviews (102)
        </p>
      </div>

      {/* body */}
      <div className="flex py-8 px-7 flex-col  w-full gap-[24px] flex-wrap ">
        {/* reviews */}
        {reviews.map((reviewData, ind) => {
          return <Review key={ind + 1} reviewData={reviewData} />;
        })}
      </div>
    </section>
  );
}

export default Reviews;
