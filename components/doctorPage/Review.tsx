import Image from "next/image";

import { Review as TypeReview } from "@/types/Review";
import { formatReviewDate } from "@/utils/formatDate";

interface ReviewProps {
  reviewData: TypeReview;
}

function Review({
  reviewData: {
    reviewerName,
    imgPath,
    consultedFor,
    reviewDate,
    reviewRating,
    reviewText,
  },
}: ReviewProps) {
  return (
    <div className="w-full flex flex-col items-center gap-[15px] px-[35px] pt-[13px] pb-[22px] rounded-[17px] bg-[#fafafa]">
      {/* review head */}
      <div className="flex items-center w-full justify-between">
        {/* reviewer photo, name and consultation */}
        <div className=" flex items-center">
          {/* image container */}
          <div className="relative size-[54px] rounded-full overflow-hidden mr-2">
            <Image
              src={imgPath}
              alt={reviewerName}
              fill
              quality={78}
              className="object-contain object-center"
            />
          </div>
          <div className="flex flex-col gap-1 font-nunito justify-start">
            <p className="font-semibold text-[20px] text-[#2f2f2f]">
              {reviewerName}
            </p>
            <p className="font-medium text-[16px] text-[#939393]">
              Consulted for {consultedFor}
            </p>
          </div>
        </div>
        {/* date */}
        <p className="font-nunito text-[16px] leading-[18px] tracking-[-1%] text-[#979797]">
          {formatReviewDate(reviewDate)}
        </p>
      </div>

      {/* review body */}
      <div className="flex flex-col items-start gap-[8px]">
        {/* review rating stars */}
        <ul className="flex gap-[2px]">
          {Array.from({ length: reviewRating }).map((_, ind) => {
            return (
              <li key={ind + 1}>
                <Image
                  src="/icons/yellow-star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  quality={78}
                />
              </li>
            );
          })}
        </ul>

        {/* review text */}
        <p className="font-nunito text-[16px] leading-[150%] tracking-[-1%] text-[#2e2f2e]">
          {reviewText}
        </p>
      </div>
    </div>
  );
}

export default Review;
