import Modal from "../components/Modal";
import ReportForm from "../components/ReportForm";

const HomeView = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      {/* The button to open modal */}
      <h1 className="text-5xl font-bold mb-4">Welcome to this Maternity Report Site</h1>
      <label htmlFor="home_report-input" className="btn">
        input report
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="home_report-input" className="modal-toggle" />
      <Modal>
        <ReportForm />
      </Modal>
    </div>
  );
};

export default HomeView;
