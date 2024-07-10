import { Route, Routes } from "react-router-dom";
import Frame from "../components/Frame";
import BasicImage from "../components/photos/BasicImage";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";

import BgImage from "../components/photos/BgImage";
import CondImage from "../components/photos/CondImage";

import ContainedImage from "../components/photos/ContainedImage";
import TallFrame from "../components/TallFrame";
import ZoomableImage from "../components/photos/ZoomableImage/ZoomableImage";

export default function MultimediaRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Frame />}>
        {/* html img */}
        {/* fit to original image's height */}
        <Route path="i1" element={<BasicImage src={img1} />} />
        {/* fit to original image's width */}
        <Route path="i2" element={<BasicImage src={img1} fit="width" />} />
        {/* fit to viewport width */}
        <Route path="i3" element={<BasicImage src={img1} fit="full" />} />
        {/* Tall vs Wide Image detection */}
        <Route path="i4" element={<BasicImage src={img1} fit="original" />} />
        <Route path="i5" element={<BasicImage src={img2} fit="original" />} />
        {/* Can handle non-exist image */}
        <Route path="i6" element={<CondImage src={img2} />} />
        <Route path="i7" element={<CondImage src={"/not-found"} />} />
        <Route
          path="i8"
          element={<ContainedImage src={img2} width="900px" height="200px" />}
        />
        <Route
          path="i9"
          element={
            <TallFrame>
              <ContainedImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Koppen-Geiger_Map_v2_World_1991%E2%80%932020.svg/2560px-Koppen-Geiger_Map_v2_World_1991%E2%80%932020.svg.png"
                }
                width="400px"
                height="400px"
              />
            </TallFrame>
          }
        />
        <Route path="i10" element={<ZoomableImage src={img3} />} />
        {/* css background */}
        <Route
          path="ia"
          element={<BgImage src={img1} width="500px" height="500px" />}
        />
        <Route
          path="ib"
          element={
            <BgImage src={img1} width="500px" height="500px" size="contain" />
          }
        />
      </Route>
    </Routes>
  );
}
