import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData.entries()));
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);
  };
  return (
    <div>
      <h2 className="text-3xl">Post a New Job</h2>

      <div>
        <form onSubmit={handleAddJob} className="card-body">
          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="job_type"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Job Type
              </option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              name="field"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>

          {/* Salary min-max and currency */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            {/* Minimum Salary  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="number"
                name="min"
                placeholder="Minimum Salary"
                className="input input-bordered"
                required
              />
            </div>

            {/* Maximum Salary */}
            <div className="form-control">
              <input
                type="number"
                name="max"
                placeholder="Minimum Salary"
                className="input input-bordered"
                required
              />
            </div>

            {/* Currency Select */}

            <div className="form-control">
              <select
                name="currency"
                className="select select-ghost w-full max-w-xs"
              >
                <option disabled selected>
                  Select Currency
                </option>
                <option>USD</option>
                <option>INR</option>
                <option>BDT</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Descriptions</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Job Descriptions"
              name="description"
              required
            ></textarea>
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Requirements*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <input
              type="text"
              name="requirements"
              placeholder="Job Requirements.(Put Each Requirement in a new line)"
              className="input input-bordered"
              required
            />
          </div>

          {/* Job Responsibilites*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilites</span>
            </label>
            <input
              type="text"
              name="responsibilites"
              placeholder="Job Requirements.(Put Each Responsibilites in a new line)"
              className="input input-bordered"
              required
            />
          </div>

          {/* HR name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR email </span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
