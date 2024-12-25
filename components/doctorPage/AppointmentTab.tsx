import { DoctorData } from "@/types/Doctor";
import SessionModeSelect from "./SessionModeSelect";
import TimeSlotSelect from "./TimeSlotSelect";

interface AppointmentTabProps {
  doctorData: DoctorData;
}

function AppointmentTab({ doctorData: doctor }: AppointmentTabProps) {
  return (
    <div className="bg-white p-7 py-10 pb-14 w-full flex flex-col items-center text-white rounded-[29px] border border-[#e8e8e8] h-max">
      {/* fees */}
      <div className="flex items-center justify-center rounded-[15px] border border-[#e2e2e2] w-full h-[59px] gap-[245px]">
        <p className="font-nunito font-semibold text-[20px] tracking-[0.2px] text-black">
          Appointment fee
        </p>
        <p className="text-primary font-inter font-semibold text-[20px] tracking-[0.2px] ">
          ₹<span>{doctor.fee + ".00"}</span>
        </p>
      </div>

      {/* Select your mode of session */}
      <SessionModeSelect />

      {/* Pick a time slot */}
      <TimeSlotSelect />

      {/* booking button */}
      <button className="bg-primary btn--shining-light w-full  py-[12px] rounded-[8px] font-inter font-medium text-[20px] text-white flex justify-center items-center ">
        <span>Make An Appointment</span>
      </button>
    </div>
  );
}

export default AppointmentTab;
