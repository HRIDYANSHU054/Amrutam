import { Metadata } from "next";

// interface AboutProps {}

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Amrutam",
};

function About() {
  return (
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-nunito font-bold text-7xl">
      About
    </h1>
  );
}

export default About;
