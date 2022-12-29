import { useEffect, useState } from "react";
import Modal from "./Modal";

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");
}
interface IProps {
  rowData:any
}
const DetailModal = ({ rowData }: IProps) => {
  const [data, setData] = useState({
    id: 0,
    mother_name: "",
    mother_age: 0,
    gestational_age: 0,
    baby_gender: 0,
    baby_weight: 0,
    baby_length: 0,
    birth_description: "",
    birthing_method: 0,
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    if (rowData != null) {
      setData(rowData)
    }
  }, [rowData]);
  return (
    <Modal>
      <h3 className="font-bold text-lg">Detail Data</h3>
      <div className="grid grid-cols-2">
        <p className="py-4">
          {" "}
          Mother Name : <span className="font-bold">
            {data!.mother_name}
          </span>{" "}
        </p>
        <p className="py-4">
          {" "}
          Mother Age : <span className="font-bold">
            {data!.mother_age}
          </span>{" "}
        </p>
        <p className="py-4">
          {" "}
          Gestational Age :{" "}
          <span className="font-bold">{data!.gestational_age}</span>{" "}
        </p>
        <p className="py-4">
          {" "}
          Baby Gender : <span className="font-bold">
            {data!.baby_gender}
          </span>{" "}
        </p>
        <p className="py-4">
          {" "}
          Baby Weight : <span className="font-bold">
            {data!.baby_weight}
          </span>{" "}
        </p>
        <p className="py-4">
          {" "}
          Baby Length : <span className="font-bold">
            {data!.baby_length}
          </span>{" "}
        </p>
        <p className="py-4">
          Birth Description :{" "}
          <span className="font-bold">{data!.birth_description}</span>
        </p>
        <p className="py-4">
          Birthing Method :{" "}
          <span className="font-bold">{data!.birthing_method}</span>
        </p>
        <p className="py-4">
          Birthing Date : {formatDate(new Date(data!.updated_at))}
        </p>
      </div>

      <div className="modal-action">
        <label htmlFor="detail_modal" className="btn">
          Ok
        </label>
      </div>
    </Modal>
  );
};

export default DetailModal;
