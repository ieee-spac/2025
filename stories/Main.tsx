import Image from "next/image";
import logo from "./assets/spac_logo_year_stars.svg";

export const Main = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <main className="flex flex-col justify-center items-center space-y-4 h-fit border border-secondary px-4 py-8 md:px-20 md:py-16 rounded-lg transition-all ease-in-out duration-300 group hover:shadow-[0_0px_15px_rgba(0,202,255,1)]">
        <Image
          src={logo}
          alt="Main SPAC logo with year and stars"
          className="w-full bobbing-animation-1 transition-all ease-in-out duration-700 group-hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)]"
        />
        <div className="flex flex-col items-center space-y-2 text-center">
          <p className="font-semibold text-lg md:text-2xl">
            IEEE Student Professional Awareness Conference
          </p>
          <p className="text-xs md:text-xl">
            November 1<sup>st</sup> |{" "}
            <a href="https://maps.app.goo.gl/wk5vdFH7StaCvsJf7" target="_blank" noopener noreferrer className="link">
              Brookstreet Hotel
            </a>
          </p>
        </div>
        <button className="btn btn-outline btn-accent btn-wide text-lg md:text-xl group-hover:shadow-[0_0px_10px_rgba(255,209,0,1)]">
          Become a Sponsor
        </button>
      </main>
    </div>
  );
};
