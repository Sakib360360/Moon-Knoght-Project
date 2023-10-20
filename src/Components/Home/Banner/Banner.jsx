import background from "../../../assets/background.png";

const Banner = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-[1em] py-[5em] flex flex-col justify-between items-center lg:flex-row">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
            Exclusive <br /> Events <br /> Priceless <br /> memories
          </h1>
          <p className="my-5 break-words max-w-[400px]">
            Make your life{"'"}s events into priceless memories. Live your life
            as it should be.
          </p>

          <button className="bg-black text-white rounded-lg px-5 py-3 font-semibold cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-[30em] lg:w-[25em] xl:w-[35em]">
          <img className="w-full" src={background} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
