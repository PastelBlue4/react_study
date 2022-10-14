import { Link, Route, Routes } from "react-router-dom";
import WeekOne from "./week1/page/WeekOne";
import WeekTwo from "./week2/page/WeekTwo";
import WeekThree from "./week3/page/WeekThree";

function App() {
  return (
    <>
      <div>
        <Link to="/">Go to Week 1 page</Link>
        <Link to="weektwo">Go to Week 2 page</Link>
        <Link to="weekthree">Go to Week 3 page</Link>
      </div>

      <Routes>
        <Route path="/" element={<WeekOne />} />
        <Route path="weektwo" element={<WeekTwo />} />
        <Route path="weekthree" element={<WeekThree />} />
      </Routes>
    </>
  );
}

export default App;
