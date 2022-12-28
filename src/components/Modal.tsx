import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Modal = ({ children }:IProps) => {
  return (
    <div className="modal">
      <div className="modal-box hide-scrollbar relative">
        {children}
      </div>
    </div>
  );
};

export default Modal;
