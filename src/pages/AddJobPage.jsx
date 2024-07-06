import { useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under 3LPA");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      description,
      location,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    addJobSubmit(newJob);
    toast.success("Job Added successfully");
    return navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-2xl rounded-lg border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center text-green-500 font-semibold mb-6">
              Add Job
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-800 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="title"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  // console.log(e.target.value)
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-800 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-gray-800 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              >
                <option value="Under 3LPA">Under 3LPA</option>
                <option value="4LPA - 6LPA">4LPA - 6LPA</option>
                <option value="6LPA - 7LPA">6LPA - 7LPA</option>
                <option value="7LPA - 8LPA">7LPA - 8LPA</option>
                <option value="8LPA - 9LPA">8LPA - 9LPA</option>
                <option value="9LPA - 10LPA">9LPA - 10LPA</option>
                <option value="10LPA - 12LPA">10LPA - 12LPA</option>
                <option value="125LPA - 15LPA">125LPA - 15LPA</option>
                <option value="15LPA - 17LPA">15LPA - 17LPA</option>
                <option value="17LPA - 20LPA">17LPA - 20LPA</option>
                <option value="Over 20LPA">Over 200LPA</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-800 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company_name"
                className="block text-gray-800 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-800 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => {
                  setCompanyDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-800 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => {
                  setContactEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-800 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                required
                value={contactPhone}
                onChange={(e) => {
                  setContactPhone(e.target.value);
                }}
              />
            </div>

            <div>
              <button
                className="bg-green-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
