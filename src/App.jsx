import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import { Route, Routes } from "react-router-dom";
import AssignmentTwo from "./Assignments/AssignmentTwo/AssignmentTwo";
import AssignmentThree from "./Assignments/AssignmentThree/AssignmentThree";
import AssignmentFour from "./Assignments/AssignmentFour/AssignmentFour";

function App() {
  return (
    <>
      <Routes>
        <Route path="/one" element={<AssignmentOne />} />
        <Route path="/two" element={<AssignmentTwo />} />
        <Route path="/three" element={<AssignmentThree />} />
        <Route path="/four" element={<AssignmentFour />} />
      </Routes>
    </>
  );
}

export default App;
