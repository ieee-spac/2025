import Image from "next/image";
import logo from "./assets/spac_logo_year_stars.svg";

export const Main = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <main className="flex flex-col justify-center items-center space-y-4 h-fit border border-secondary p-4 rounded-lg">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image src={logo} alt="Main SPAC logo with year and stars" />
          <p>Student Professional Awareness Conference</p>
          <p>November 1st | Brookstreet Hotel</p>
        </div>
        <div>
          <button className="btn btn-accent btn-wide text-lg">
            Become a Sponsor
          </button>
          {/* <button>2022</button> */}
        </div>
      </main>
    </div>
  );
};
