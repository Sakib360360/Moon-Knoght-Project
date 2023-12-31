import "./Thankful.css";

const Thankful = () => {
  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden px-[1em] min-h-[40em] relative mt-12 thankful-container">
      <div>
        <h1 className="text-5xl md:text-6xl font-semibold z-10 relative">
          We are thankful to
          <br /> everyone who has
          <br /> supported OxiWear
        </h1>
      </div>

      <div className="credits">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="contributor">
          Enayet
          <br />
          Hossain
        </div>

        <div className="contributor contributor-1">
          Md.
          <br />
          Jewel
        </div>

        <div className="contributor contributor-2">
          Sabbir
          <br />
          Ahmed
        </div>

        <div className="contributor contributor-3">
          Sakib
          <br />
          Abrar
        </div>
      </div>
    </div>
  );
};

export default Thankful;
