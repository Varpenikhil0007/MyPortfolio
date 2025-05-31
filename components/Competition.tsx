import { HoverEffect } from "./ui/card-hover-effect";

export function Competition() {
  return (
    <>
      <div id="Competition">
        <h1 className="heading">
          Project <span className="text-purple">Competition</span>
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Tech Expo 2025",
    description: "4th National Level Project Competition",
    link: "https://drive.google.com/file/d/1zmSMxIne8V4HVcdS9Y4mjMpyO2-6gg6D/view?usp=sharing",
  },
  {
    title: "Technodium(2025)-MIT",
    description:
      "Software end to end Project Competition by MIT Academy of Engineering",
    link: "https://drive.google.com/file/d/1ZOtFGO54sPp4o-OAmHzPhdoh5P0x9DMW/view?usp=sharing",
  },
  {
    title: "PRECCON 2025",
    description: "Hybrid Model National Level Conference",
    link: "https://drive.google.com/file/d/1oiDbFErNStRtWReD5EUwMd9Vpd3Tpb5Y/view?usp=sharing",
  },
  {
    title: "TCS",
    description: "Tata Imagination Challenge Participation",
    link: "https://drive.google.com/file/d/103tgAxIGWyYMZaB85hCnEAo5DUKNDXSx/view?usp=sharing",
  },
  {
    title: "GoogleCloud",
    description: "Cloud Technologies Advance Coding Test",
    link: "https://drive.google.com/file/d/1pjJkerh7ZbZ2w1IJkFTKwsMu90VK3Ym5/view?usp=drive_link",
  },
  {
    title: "GFG",
    description: "160 Days DSA coding round",
    link: "https://drive.google.com/file/d/1I3e5xXDBVOFogyfJdLSBkBvZ7b3sy2PF/view?usp=drive_link",
  },
];
export default Competition;
