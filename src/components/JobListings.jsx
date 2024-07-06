import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = isHome
    ? "/api/jobs?_limit=3"
    : "/api/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        //  console.log(data);
        setJobs(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10 ">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse All Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
