import { HoverEffect } from "./ui/card-hover-effect";

export function Certificate() {
  return (
    
    <>
    <div id="certificate">
     <h1 className="heading">
       My <span className="text-purple">Certificates</span>
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
    title: "Accenture",
    description:
      "Data Analytic:- Data Analytics and Visualization Job Simulation",
    link: "https://drive.google.com/file/d/1YY64a0t4kWGYu__wA2iGxbX2czT82uPx/view?usp=drive_link",
  },
  {
    title: "IIT-Bombay",
    description:
      "NPTL:- Database management System",
    link: "https://drive.google.com/file/d/1vpPtjzjqyrbJeKPxeudoll7rsLTI3_AI/view?usp=drive_link",
  },
  {
    title: "Udemy",
    description:
      "Css,Bootstrap,JS and PHP:- JS crash course",  
   link: "https://drive.google.com/file/d/1xRNNLL6P-NXkr5jbUJM97VFoZl1mgJBp/view?usp=drive_link",
  },
  {
    title: "Infosys",
    description:
      "Springboard:- Introduction to Deep Learning and Cyber Security",
    link: "https://drive.google.com/file/d/1e9-gg8IX8mbZSNoXTqJ6Jg9G-KiDGXDI/view?usp=drive_link",
  },
  {
    title: "GoogleCloud",
    description:
      "Introduction to Artificial Intelligence",
    link: "https://drive.google.com/file/d/1pjJkerh7ZbZ2w1IJkFTKwsMu90VK3Ym5/view?usp=drive_link",
  },
  {
    title: "Linkdin",
    description:
      "Introduction to Generative AI and advanced features",
    link: "https://drive.google.com/file/d/1I3e5xXDBVOFogyfJdLSBkBvZ7b3sy2PF/view?usp=drive_link",
  },
];
export default Certificate;