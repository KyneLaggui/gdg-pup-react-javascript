import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import { Route, Routes } from "react-router-dom";
import AssignmentTwo from "./Assignments/AssignmentTwo/AssignmentTwo";
import AssignmentThree from "./Assignments/AssignmentThree/AssignmentThree";

function App() {
  return (
    <>
      <Routes>
        <Route path="/one" element={<AssignmentOne />} />
        <Route path="/two" element={<AssignmentTwo />} />
        <Route path="/three" element={<AssignmentThree />} />
      </Routes>
    </>
  );
}

export default App;
