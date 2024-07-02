import PropTypes from "prop-types";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 110) + "...";
  }

  return (
    <div className="bg-white rounded-x7l shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold text-violet-700">{job.title}</h3>
        </div>
        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-teal-600 mb-5"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg text-green-500 mb-1 mr-1" />
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-teal-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

JobListing.propTypes = {
  job: PropTypes.object,
};

export default JobListing;
