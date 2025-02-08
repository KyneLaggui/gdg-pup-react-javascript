import AssignmentOne from "./Assignments/AssignmentOne/AssignmentOne";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AssignmentOne />} />
      </Routes>
    </>
  );
}

export default App;
