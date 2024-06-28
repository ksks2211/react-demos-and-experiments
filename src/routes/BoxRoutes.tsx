import { Route, Routes } from "react-router-dom";
import Frame from "../components/Frame";
import RippleBox from "../box/RippleBox";

export default function BoxRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Frame />}>
        <Route
          path="b1"
          element={<RippleBox color="orange" width="80vw" height="70vh" />}
        />
      </Route>
    </Routes>
  );
}
