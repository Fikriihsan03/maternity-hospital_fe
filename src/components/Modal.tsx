import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Modal = ({ children }:IProps) => {
  return (
    <div className="modal">
      <div className="modal-box hide-scrollbar relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
