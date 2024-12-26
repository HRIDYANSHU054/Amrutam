import AppointmentTab from "@/components/doctorPage/AppointmentTab";
import Concerns from "@/components/doctorPage/Concerns";
import Header from "@/components/doctorPage/Header";
import WorkExperiences from "@/components/doctorPage/WorkExperiences";
import Reviews from "@/components/doctorPage/Reviews";
import Specializations from "@/components/doctorPage/Specializations";
import LittleInfo from "@/components/doctorPage/LittleInfo";

interface DoctorPageProps {
  searchParams: { [key: string]: string | undefined };
  params: {
    doctorId: string;
  };
}

export async function generateMetadata({}: DoctorPageProps) {
  // we can access the doctorId to get actaul info about the doc from our server
  // params.doctorId;
  // but for now
  const title = "Dr. Prerna Narang";
  const description =
    "Dr. Prerna Narang a Gynaecologist in Sanjivni Hospital Surat.";

  return {
    title,
    description,
  };
}

function DoctorPage({}: DoctorPageProps) {
  // const { doctorId } = params; //as said this should be used to fetch real data from the server

  const doctor = {
    name: "Dr. Prerna Narang",
    speciality: "Gynecologist",
    img: "/doctorCardProfile.png",
    rating: 4.2,
    followers: 850,
    following: "18K",
    posts: 250,
    fee: 699,
    description:
      "Hello I am Dr. Prerna Narang a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the",
    languages: ["English", "Hindi", "Telugu"],
    concerns: [
      "Skin Treatment",
      "Pregnancy",
      "Periods Doubts",
      "Endometriosis",
      "Pelvic Pain",
      "Ovarian Cysts",
      "Pelvic Pain",
      "Endometriosis",
      "Pregnancy",
      "Periods Doubts",
      "Skin Treatment",
    ],
    workExperience: [
      {
        organization: "Astra Medical Clinic",
        role: "Senior doctor",
        from: 2014,
        till: 2016,
      },
      {
        organization: "Midtown Medical Clinic",
        role: "Senior doctor",
        from: 2016,
        till: "present",
      },
    ],
    reviews: [
      {
        reviewerName: "Alicent Hightower",
        imgPath: "/Reviewer1.png",
        consultedFor: "Skin care",
        reviewDate: new Date("20 January 2023"),
        reviewRating: 5,
        reviewText:
          "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
      },
      {
        reviewerName: "Alicent Hightower",
        imgPath: "/Reviewer1.png",
        consultedFor: "Skin care",
        reviewDate: new Date("20 January 2023"),
        reviewRating: 5,
        reviewText:
          "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
      },
      {
        reviewerName: "Alicent Hightower",
        imgPath: "/Reviewer1.png",
        consultedFor: "Skin care",
        reviewDate: new Date("20 January 2023"),
        reviewRating: 5,
        reviewText:
          "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
      },
    ],
  };

  return (
    <>
      {/* photo + bg + basic stats */}
      <Header doctorData={doctor} />

      {/* Grid */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-8 mb-8 mx-24">
        {/* left side (some more infor about the doctor) */}
        <div className=" flex flex-col gap-10 text-white rounded">
          {/* <div className="bg-blue-500 px-4 flex flex-col gap-10 text-white rounded"> */}
          {/* A little about me */}
          <LittleInfo infoData={doctor} />

          {/* I specialize In */}
          <Specializations />

          {/* The Concerns I treat */}
          <Concerns concernsData={doctor.concerns} />

          {/* My Work Experience */}
          <WorkExperiences workExperiencesData={doctor.workExperience} />

          {/* Reviews */}
          <Reviews reviewsData={doctor.reviews} />
        </div>

        {/* right side (appointment tab) */}
        <AppointmentTab doctorData={doctor} />
      </div>
    </>
  );
}

export default DoctorPage;
