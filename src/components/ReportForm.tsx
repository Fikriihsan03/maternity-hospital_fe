import { useState } from "react";

const ReportForm = () => {
  const [reportsData, setReportsData] = useState({
    mother_name: "",
    mother_age: "",
    gestational_age: "",
    baby_gender: "",
    baby_weight: "",
    baby_length: "",
    birthing_method: "",
    date: new Date(),
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(reportsData));
    setReportsData({
      mother_name: "",
      mother_age: "",
      gestational_age: "",
      baby_gender: "",
      baby_weight: "",
      baby_length: "",
      birthing_method: "",
      date: new Date(),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Mother Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          value={reportsData.mother_name}
          onChange={(e) =>
            setReportsData((prevState) => ({
              ...prevState,
              mother_name: e.target.value,
            }))
          }
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Mother Age</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          value={reportsData.mother_age}
          onChange={(e) =>
            setReportsData((prevState) => ({
              ...prevState,
              mother_age: e.target.value,
            }))
          }
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Gestational Age</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          value={reportsData.gestational_age}
          onChange={(e) =>
            setReportsData((prevState) => ({
              ...prevState,
              gestational_age: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Baby Weight (kg)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={reportsData.baby_weight}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                baby_weight: e.target.value,
              }))
            }
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Baby Length (cm)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={reportsData.baby_length}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                baby_length: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Baby Gender ?</span>
          </label>
          <div className="flex">
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                />
                <span className="label-text">Male</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                />
                <span className="label-text">Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Birthing Method</span>
          </label>
          <select
            className="select select-bordered"
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                birthing_method: e.target.value,
              }))
            }
          >
            <option disabled selected>
              Pick one
            </option>
            <option value="lotus">Lotus</option>
            <option value="water">Water</option>
            <option value="vaginal">Vaginal</option>
            <option value="gentle">Gentle</option>
            <option value="caesar">Caesar</option>
          </select>
        </div>
      </div>
      <div className="flex gap-8 my-4">
        <input className="btn btn-primary" type="submit" value="Submit" />
        <label htmlFor="home_report-input" className="btn btn-secondary">
          Cancel
        </label>
      </div>
    </form>
  );
};

export default ReportForm;
