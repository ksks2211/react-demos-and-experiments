import { Route, Routes } from "react-router-dom";
import SampleBtnPage from "../pages/SampleBtnPage";
import ReOrderableList from "../components/lists/ReOrderableList";

export default function SampleRoutes() {
  return (
    <Routes>
      <Route path="/btn" element={<SampleBtnPage />} />
      <Route path="/list1" element={<ReOrderableList />} />
    </Routes>
  );
}
