import { Metadata } from "next";

import LocationSelect from "@/components/findDoctor/LocationSelect";
import SearchInput from "@/components/findDoctor/SearchInput";
import Circle from "@/components/Circle";
import Select from "@/components/general/Select";
import FilterChip from "@/components/findDoctor/FilterChip";
import DoctorCard from "@/components/findDoctor/DoctorCard";

// interface findDoctorPageProps {}

const expertiseOptions = [
  { value: "Hair Care", label: "Hair Care" },
  { value: "Eyes", label: "Eyes" },
  { value: "Bones", label: "Bones" },
  { value: "Cardiovascular", label: "Cardiovascular" },
];

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-binary", label: "Non-binary" },
];

const feesOptions = [
  { value: "0-500", label: "Rs.0-Rs.500" },
  { value: "500-1000", label: "Rs.500-Rs.1000" },
  { value: "1000-2000", label: "Rs.1000-Rs.2000" },
  { value: "+2000", label: "Above Rs. 2000" },
];

const languageOptions = [
  { value: "Hindi", label: "Hindi" },
  { value: "English", label: "English" },
  { value: "Bengali", label: "Bengali" },
  { value: "Telugu", label: "Telugu" },
  { value: "Marathi", label: "Marathi" },
  { value: "Tamil", label: "Tamil" },
  { value: "Urdu", label: "Urdu" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Kannada", label: "Kannada" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Odia", label: "Odia" },
];

const allFiltersOptions = [
  { value: "bySpecialty", label: "By Specialty" },
  { value: "byLocation", label: "By Location" },
  { value: "byRating", label: "By Rating" },
  { value: "byTreatmentType", label: "By Treatment Type" },
  { value: "byInsurance", label: "By Insurance Accepted" },
];

export const metadata: Metadata = {
  title: "Find Doctor",
  description: "Find expert Doctors for an In-clinic session",
};

function FindDoctorPage({}) {
  return (
    <>
      <div className="relative h-[221px] flex items-center flex-col justify-center bg-[#EAF2EA] overflow-hidden">
        {/* Circles Container*/}
        <div className="  h-full overflow-hidden">
          {/* Circles*/}
          <Circle position="-top-[92px] right-[291px]" />
          <Circle position="-top-[92px] left-[291px]" />
          <Circle position="top-[50%] right-[369px]" />
          <Circle position="top-[50%] left-[369px]" />
        </div>

        <div className="absolute z-10 flex justify-between flex-col gap-12 items-center">
          <p className="text-black text-[32px] font-poppins font-medium tracking-[0.5%] leading-[75%]">
            Find expert Doctors for an In-clinic session here
          </p>

          <div className="flex gap-8">
            {/* location */}
            <LocationSelect />

            {/* Input field */}
            <SearchInput />
          </div>
        </div>
      </div>

      <section className="bg-white flex flex-col items-center pb-12">
        {/* Filters List */}
        <div className="w-full flex items-center justify-center border border-[EDEDED] h-[72px] gap-20 ">
          {/* Expertise */}
          <Select
            id="select-expertise"
            title="Expertise"
            options={expertiseOptions}
          />

          {/* Gender */}
          <Select id="select-gender" title="Gender" options={genderOptions} />

          {/* Fees */}
          <Select id="select-fees" title="Fees" options={feesOptions} />

          {/* Languages */}
          <Select
            id="select-languages"
            title="Languages"
            options={languageOptions}
          />

          {/* All filters */}
          <Select
            id="select-all-filters"
            bgColor="bg-[#DCEEDC]"
            textColor="text-primary"
            title="All filters"
            options={allFiltersOptions}
          />
        </div>

        {/* applied filters */}
        <div className="flex gap-[16px] self-end my-10 mx-20">
          <FilterChip text="Hair Care" />
          <FilterChip text="Female" />
          <FilterChip text="Rs.0-Rs.500" />
          <FilterChip text="Hindi" />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-12 mx-20">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </section>
    </>
  );
}

export default FindDoctorPage;
