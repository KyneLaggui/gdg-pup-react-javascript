import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import { Route, Routes } from "react-router-dom";
import AssignmentTwo from "./Assignments/AssignmentTwo/AssignmentTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/one" element={<AssignmentOne />} />
        <Route path="/two" element={<AssignmentTwo />} />
      </Routes>
    </>
  );
}

export default App;
