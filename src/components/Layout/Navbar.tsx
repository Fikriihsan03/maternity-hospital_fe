import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[70px] border-b-2 border-[#cb3b8a] font-bold">
      <h1 className="poppins text-lg tracking-wide">Muhammad Fikri Ihsan</h1>
      <ul className="flex gap-4 ">
        <Link to="/"><li>Home</li></Link>
        <Link to="/report"><li>Report</li></Link>
      </ul>
    </div>
  );
};
export default Navbar;
