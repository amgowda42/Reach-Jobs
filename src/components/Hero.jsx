import PropTypes from "prop-types";

const Hero = ({ title = "Find your Jobs", subtitle, discripton }) => {
  return (
    <section className="bg-red-300 py-20 mb-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h5 className="my-1 text-xl text-stone-500 hover:text-stone-600 font-serif italic">
            {discripton}
          </h5>
          <h1 className="text-4xl font-extrabold text-teal-500 hover:text-teal-600 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white hover:text-yellow-200">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  discripton: PropTypes.string,
};

export default Hero;
