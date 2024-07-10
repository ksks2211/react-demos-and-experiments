import { Route, Routes } from "react-router-dom";
import Frame from "../components/Frame";
import RippleBox from "../box/RippleBox";
import PositionBox from "../box/PositionBox";
import TallFrame from "../components/TallFrame";
import MovableBox from "../box/MovableBox";
import MovableBox2 from "../box/MovableBox2";
import RatioBox from "../box/RatioBox";

export default function BoxRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Frame />}>
        <Route
          path="b1"
          element={<RippleBox color="orange" width="80vw" height="70vh" />}
        />

        <Route path="b2" element={<PositionBox />} />

        <Route
          path="b3"
          element={
            <TallFrame>
              <PositionBox />
            </TallFrame>
          }
        />

        <Route path="b4" element={<MovableBox />} />

        <Route path="b5" element={<MovableBox2 />} />

        <Route
          path="b6"
          element={<RatioBox width="300px" children={<div>hello world</div>} />}
        />
      </Route>
    </Routes>
  );
}
