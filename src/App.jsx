import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
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
    </div>
  );
};

export default App;
