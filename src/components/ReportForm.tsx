import { useEffect, useState } from "react";
import dataService from "../services/DataServices";

const url = process.env.REACT_APP_API_URL;

function postData(data: IReportData) {
  data.mother_nik = +data.mother_nik;
  dataService
    .post(`/api/v1/child-birth`, data)
    .then((data) => {
      if (data.status === 200) {
        alert("success");
      }
      alert(data.message);
      return window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function putData(data: object, id: number) {
  dataService
    .put(`/api/v1/child-birth/${id}`, data)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        alert("success");
      }
      alert(data.message);
      return window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

interface IProps {
  editData?: any;
}
interface IReportData {
  mother_nik: string | number;
  mother_name: string;
  mother_age: number;
  gestational_age: number;
  baby_gender: string;
  baby_weight: number;
  baby_length: number;
  birthing_method: string;
  birth_description: string;
}
const ReportForm = ({ editData }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [reportsData, setReportsData] = useState<IReportData>({
    mother_nik: "",
    mother_name: "",
    mother_age: 0,
    gestational_age: 0,
    baby_gender: "",
    baby_weight: 0,
    baby_length: 0,
    birthing_method: "",
    birth_description: "",
  });

  useEffect(() => {
    if (editData != null) {
      const { id, created_at, updated_at, ...restOfData } = editData;

      setReportsData(editData);
      setIsEdit(true);
    }
  }, [editData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isEdit) {
      putData(reportsData, editData.id);
      setIsEdit(false);
    } else {
      postData(reportsData);
    }
    setReportsData({
      mother_nik: "",
      mother_name: "",
      mother_age: 0,
      gestational_age: 0,
      baby_gender: "",
      baby_weight: 0,
      baby_length: 0,
      birthing_method: "",
      birth_description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isEdit && (
        <>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Mother NIK (16 digits)</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={reportsData.mother_nik}
              onChange={(e) =>
                setReportsData((prevState) => ({
                  ...prevState,
                  mother_nik: e.target.value,
                }))
              }
            />
          </div>
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
        </>
      )}

      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Mother Age</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full "
          value={reportsData.mother_age}
          onChange={(e) =>
            setReportsData((prevState) => ({
              ...prevState,
              mother_age: +e.target.value,
            }))
          }
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Gestational Age</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full "
          value={reportsData.gestational_age}
          onChange={(e) =>
            setReportsData((prevState) => ({
              ...prevState,
              gestational_age: +e.target.value,
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
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={reportsData.baby_weight}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                baby_weight: +e.target.value,
              }))
            }
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Baby Length (cm)</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={reportsData.baby_length}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                baby_length: +e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Baby Gender </span>
          </label>
          <div className="flex">
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  value="male"
                  className="radio checked:bg-blue-500"
                  checked={reportsData.baby_gender === "male"}
                  onChange={(e) =>
                    setReportsData((prevState) => ({
                      ...prevState,
                      baby_gender: e.target.value,
                    }))
                  }
                />
                <span className="label-text">Male</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  value="female"
                  checked={reportsData.baby_gender === "female"}
                  className="radio checked:bg-red-500"
                  onChange={(e) =>
                    setReportsData((prevState) => ({
                      ...prevState,
                      baby_gender: e.target.value,
                    }))
                  }
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
            value={reportsData.birthing_method}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                birthing_method: e.target.value,
              }))
            }
          >
            <option value="" disabled>
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

      <div className="flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Birth Description</span>
          </label>
          <select
            className="select select-bordered"
            value={reportsData.birth_description}
            onChange={(e) =>
              setReportsData((prevState) => ({
                ...prevState,
                birth_description: e.target.value,
              }))
            }
          >
            <option value="" disabled>
              Pick one
            </option>
            <option value="healthy">healthy</option>
            <option value="disabled">disabled</option>
            <option value="died">died</option>
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
