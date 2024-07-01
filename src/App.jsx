import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        subtitle="Search your favorite jobs and host your jobs aswell"
        discripton="Land on your job"
      />
      <HomeCards />
      <JobListings />
    </div>
  );
};

export default App;
