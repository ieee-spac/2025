import Image from "next/image";
import exclusive_masterclass_image from "./assets/exclusive_masterclass_image.svg";
import networking_booths_image from "./assets/networking_booths_image.svg";
import presentation_section_image from "./assets/presentation_section_image.svg";
import professional_1_on_1_image from "./assets/professional_1_on_1_image.svg";
import workshops_image from "./assets/workshops_image.svg";

// ColourBubble Component
// const ColourBubble = ({
//   number,
//   text,
//   color,
// }: {
//   number: string;
//   text: string;
//   color: string;
// }) => (
// <div className="bg-primary text-white p-4 rounded-full flex justify-center items-center w-32 h-32">
//   <div className="text-center">
//     <h4 className="text-6xl font-semibold">{number}</h4>
//     <p className="font-semibold">{text}</p>
//   </div>
// </div>
// );

// SectionItem Component
const SectionItem = ({
  title,
  description,
  imgSrc,
  imgAlt,
}: {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}) => (
  <div className="flex justify-between">
    <div className="space-y-5">
      <h4 className="text-4xl font-semibold">{title}</h4>
      <p className="text-2xl">{description}</p>
    </div>
    {imgSrc && <Image src={imgSrc} alt={imgAlt} className="w-40" />}
  </div>
);

// Data for Colour Bubbles
const bubbles = [
  { number: "100", text: "Companies", color: "accent" },
  { number: "200", text: "Students", color: "success" },
  { number: "9", text: "Years", color: "warning" },
  { number: "300", text: "Attendees", color: "secondary" },
];

// Data for Section Items
const sections = [
  {
    title: "Presentation Section",
    description: "Spot for speakers and event kickoff",
    imgSrc: presentation_section_image,
    imgAlt: "Presentation",
  },
  {
    title: "Professional 1:1",
    description:
      "Quick one-on-one conversations with students in your discipline",
    imgSrc: professional_1_on_1_image,
    imgAlt: "Professional Conversation",
  },
  {
    title: "Exclusive Masterclass",
    description: "Stand alone event to reach out, showcase, and finesse.",
    imgSrc: exclusive_masterclass_image,
    imgAlt: "Masterclass",
  },
  {
    title: "Workshops",
    description:
      "Concurrently run, where you show students what you're all about.",
    imgSrc: workshops_image,
    imgAlt: "Workshops",
  },
  {
    title: "Networking Booths",
    description:
      "Drop in to say hello, and learn more about what it's like to work at these companies.",
    imgSrc: networking_booths_image,
    imgAlt: "Networking",
  },
];

export const About = () => {
  return (
    <article className="px-3 md:px-8 max-w-2xl mx-auto">
      <section className="space-y-8">
        <h2 className="text-primary text-6xl font-bold">About Us</h2>
        <p className="text-base-content">
          The IEEE Student Professional Awareness Conference (SPAC) is a formal
          networking event & dinner that serves esteemed professionals and
          allows them to engage with engineering and computer science students
          within their fields.
        </p>
        <p className="text-base-content">
          SPAC provides students, academics, and industry professionals an
          opportunity to network and bridge the gap between classrooms and
          boardrooms, thereby empowering attendees to build professional
          connections and form a bond.
        </p>
        {/* <div className="flex justify-around"> */}
        {/*   {bubbles.map((bubble) => ( */}
        {/*     <ColourBubble */}
        {/*       key={bubble.text} */}
        {/*       number={bubble.number} */}
        {/*       text={bubble.text} */}
        {/*       color={bubble.color} */}
        {/*     /> */}
        {/*   ))} */}
        {/* </div> */}

        {/* <h4 className="text-7xl font-bold">100</h4> */}
        {/* <p className="font-semibold">Companies</p> */}
        {/* <h4 className="text-5xl font-bold">200</h4> */}
        {/* <p className="font-semibold">Students</p> */}
        {/* <h4 className="text-5xl font-bold">9</h4> */}
        {/* <p className="font-semibold">Years</p> */}
        {/* <h4 className="text-5xl font-bold">300</h4> */}
        {/* <p className="font-semibold">Attendees</p> */}

        <div className="grid grid-flow-col mx-auto justify-center h-[38vw] max-h-56">
          <div className="bg-accent text-accent-content h-full aspect-square rounded-full flex items-center justify-center text-center sm:-mr-1">
            <div className="">
              <h4 className="text-5xl min-[375px]:text-6xl min-[425px]:text-7xl sm:text-8xl font-bold">100</h4>
              <p className="min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl font-bold">Companies</p>
            </div>
          </div>
          <div className="bg-neutral text-neutral-content h-[49%] aspect-square rounded-full flex items-center justify-center text-center self-end -mr-4 sm:-mr-8">
            <div>
              <h4 className="text-xl min-[375px]:text-3xl min-[425px]:text-4xl sm:text-5xl font-bold">200</h4>
              <p className=" text-[0.5rem] min-[375px]:text-xs min-[425px]:text-sm sm:text-md font-bold">Students</p>
            </div>
          </div>
          <div className="bg-warning text-warning-content h-[65%] aspect-square rounded-full flex items-center justify-center text-center self-start -mr-3 sm:-mr-5">
            <div>
              <h4 className="text-4xl min-[425px]:text-5xl sm:text-6xl font-bold">9</h4>
              <p className="min-[375px]:text-xl min-[425px]:text-2xl sm:text-3xl font-bold">Years</p>
            </div>
          </div>
          <div className="bg-secondary text-secondary-content h-[59%] aspect-square rounded-full flex items-center justify-center text-center self-end">
            <div>
              <h4 className="text-3xl min-[375px]:text-4xl min-[425px]:text-5xl sm:text-6xl font-bold">300</h4>
              <p className="text-[0.5rem] min-[375px]:text-xs min-[425px]:text-sm sm:text-md font-bold">Attendees</p>
            </div>
          </div>
        </div>

        <p className="text-base-content">
          First hosted in 1979, SPAC has manifested itself as an event where
          future professionals receive exposure to the world of employment which
          complements their ongoing studies.
        </p>
      </section>
      <section className="space-y-6">
        <h3 className="text-5xl font-semibold">A typical SPAC...</h3>
        {sections.map((section) => (
          <SectionItem
            key={section.title}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
          />
        ))}
      </section>
    </article>
  );
};
